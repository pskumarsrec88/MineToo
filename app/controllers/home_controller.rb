class HomeController < ApplicationController
	
  before_filter :authenticate_user!, :except => [:home, :homenotlogin, :profile, :quality, :sessions, :tellfriend, :invite, :profilesession]

  def home
  end
  
  def homenotlogin
	  unless params[:date_of_birth].empty?
		@dob=params[:date_of_birth]
		@user=User.find_all_by_date_of_birth(@dob)	
	  else
			flash[:alert] = "Please select Date of birth"
			render :home
	  end
  end

  #registration/profile
  def profile
        session[:value]=""
	session[:qualities]=""
  end

  def profilesession
	@a=User.find_by_email(params[:user][:email])
	if @a.present?
		flash[:alert] = "Email already taken"
		redirect_to "/signupprofile"
	else
		session[:value]={:name=>params[:user][:name], :date_of_birth=>params[:date_of_birth], :email=>params[:user][:email], :sex=>params[:user][:sex], :hour_of_birth=>params[:user][:hour_of_birth], :living_city=>params[:user][:living_city], :living_country=>params[:user][:living_country], :born_city=>params[:user][:born_city], :born_country=>params[:user][:born_country]}
		redirect_to "/signupquality"
	end
  end

  #registration/quality
  def quality
	  redirect_to "/signupprofile" if session[:value].empty?
	  @quality=["considerate","boisterous","wise","relaxed","forward-looking","intense","indecisive","strong","grounded","emotional","demonstratitve","witty","unaffected","inscrutable","mercurial"]
  end
  
  #registration/sessions
  def sessions
	session[:qualities]=Array.new
	if params[:user].present?
	params[:user].values.each do |a|
		session[:qualities]<<a     
	end
	end
	len=session[:qualities].length
	if len>=4 and len<=10
		redirect_to :controller=>"registrations", :action=>"new" 
	else
		flash[:alert] = "Must select 4 to 10 qualities"
		redirect_to "/signupquality"
	end
  end
  
  #Show profile
  def showprofile
	@profile=User.find(params[:id])
	#@qualities=Quality.select("name").find(@profile.qualities)
  end

  #Exact birthday
  def birthday
	  @dob=current_user.date_of_birth
	  @dat=@dob.ctime
	  @date=@dat.split(' ')		
	  @dateofbirth=@date[2]+" "+@date[1]+" "+@date[4]
	  @user=User.find_all_by_date_of_birth(@dob)
  end
  
  #Search page for younger or older
  def birthdaysearch
  end

  #Search function for younger or older
  def search
	dob=current_user.date_of_birth
	start_date=Date.civil(dob.year+params[:search][:younger].to_i,dob.month,dob.day)
	end_date=Date.civil(dob.year-params[:search][:older].to_i,dob.month,dob.day)
	@user=User.where(["(date_of_birth <= ? and date_of_birth>=?)",start_date,end_date])
  end
  
  def contact
  end
  
  def updatecontact
	@user=User.find(current_user.id)
	@user.update_attributes(params[:user])
	redirect_to edit_user_registration_path
  end

  def myself
	  @user=User.new
  end

  def myselfupdate
	@user=User.find(current_user.id)
	@result=@user.update_attributes(params[:user])
	if @result
	else
		render:myself
	end
  end

  def tellfriend
  end

  def invite
	  @contact=params[:tell]
	  Sendmail.tellfriend(@contact).deliver
  end
  
  def adminmail
	  @contact=params[:mail]
	  Sendmail.contactadmin(@contact).deliver
  end
  
end

