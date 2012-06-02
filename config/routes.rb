Devise::Application.routes.draw do

   #Routes for home path
   root :to => "home#home"
   
  #Routes for devise 
  devise_for :users, :controllers => {:registrations => "registrations"}
 
  #Routes for Home controller
  match '/signupprofile' => 'home#profile'
  match 'profilesession'  => 'home#profilesession'
  match '/signupquality' => 'home#quality'
  match '/signupqual' => 'home#sessions'
  match '/home' => 'home#home'
  match '/homenotlogin' => 'home#homenotlogin'
  match "/showprofile/:id" => "home#showprofile"
  match "/birthday" => "home#birthday"
  match "/birthdaysearch" => "home#birthdaysearch"
  match "/search" => "home#search"
  match "/contact" => "home#contact"
  match "/updatecontact" => "home#updatecontact"
  match "/myself" => "home#myself"
  match "/myselfupdate" => "home#myselfupdate"
  match '/invite' => 'home#tellfriend'
  match '/invitefriend' => 'home#invite'
  match '/adminmail' => 'home#adminmail'
  
  #Routes for message controller  
  match '/sendmessage/:id' => "messages#sendmessage"
  match '/aftersend' => "messages#aftersend"
  match '/showmessage' => 'messages#showmessage'
  match '/aftershow/:id' => 'messages#aftershow'
  match '/sendingmessage' => 'messages#sendingmessage'
  
  #Routes for bulletin page controller  
  match "/showbulletin" => "bulletins#showbulletin"
  match "/sendbulletin" => "bulletins#sendbulletin"
  match "/aftersendbulletin" => "bulletins#aftersendbulletin"
  match "/sendmessage" => "bulletins#sendmessage"
  
  
  #Routes for static page controller  
  match '/about' => 'static#about'
  match '/faq' => 'static#faq'
  match '/admincontact' => 'static#admincontact'
  match '/contactus' => 'static#contactus'
  match '/thoughts' => 'static#thoughts'
  match '/paradox' => 'static#paradox'
  match '/terms' => 'static#terms'
  match '/logout' => 'static#logoutsuccess'
  match '/notfound' => 'static#notfound'
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
