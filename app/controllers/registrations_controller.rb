class RegistrationsController < Devise::RegistrationsController
  prepend_before_filter :require_no_authentication, :only => [ :new, :create ]
  prepend_before_filter :authenticate_scope!, :only => [:edit, :update, :destroy]
  include Devise::Controllers::InternalHelpers

  # Action for new biography
  def new
    if session[:value].present? and session[:qualities].present?
      build_resource({})
      render_with_scope :new	
    elsif session[:value].present?
      redirect_to "/signupquality"  
    else
      redirect_to "/signupprofile"
    end
  end

  # Action for register biography
  def create      
    build_resource    
    if resource.save
      set_flash_message :notice, :signed_up
      redirect_to "/users/confirmation/new"
      @user = User.find_by_email(resource.email)
      @user.qualities=session[:qualities]
      @user.new_member_notification="1"
      @user.private_message_notification="1"
      @user.offers_notification="1"
      @user.save
      session[:value]=""
      session[:qualities]=""
      password=session[:password].to_s
      Sendmail.sendpassword(resource.email,password).deliver
    else
      clean_up_passwords(resource)
      render_with_scope :new
    end
  end
   
   # GET /resource/edit
  def edit
    render_with_scope :edit
  end

  # PUT /resource
  def update
    if resource.update_with_password(params[resource_name])
      set_flash_message :notice, :updated
      redirect_to after_sign_in_path_for(self.resource)
    else
      clean_up_passwords(resource)
      render_with_scope :edit
    end
  end

  # DELETE /resource
  def destroy
    resource.destroy
    set_flash_message :notice, :destroyed
    sign_out_and_redirect(self.resource)
  end

  protected

    # Authenticates the current scope and gets a copy of the current resource.
    # We need to use a copy because we don't want actions like update changing
    # the current user in place.
    def authenticate_scope!
      send(:"authenticate_#{resource_name}!")
      self.resource = resource_class.find(send(:"current_#{resource_name}").id)
    end
end
