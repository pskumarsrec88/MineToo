require 'spec_helper'

describe HomeController do
	describe "route recognition for Home" do
		
		it "should routes to #profile" do
			post("/signupprofile").should route_to("home#profile")
		end
		
		it "should routes to #profilesession" do
			get("/profilesession").should route_to("home#profilesession")
		end
		
		it "should routes to #quality" do
			post("/signupquality").should route_to("home#quality")
		end
		
		it "should routes to #sessions" do
			get("/signupqual").should route_to("home#sessions")
		end
		
		it "should routes to #home" do
			get("/home").should route_to("home#home")
		end
		
		it "should routes to #homenotlogin" do
			get("/homenotlogin").should route_to("home#homenotlogin")
		end
		
		it "should routes to #profilesession" do
			get("/birthday").should route_to("home#birthday")
		end
		
		it "should routes to #birthdaysearch" do
			get("/birthdaysearch").should route_to("home#birthdaysearch")
		end
		
		it "should routes to #search" do
			get("/search").should route_to("home#search")
		end
		
		it "should routes to #contact" do
			get("/contact").should route_to("home#contact")
		end
		
		it "should routes to #updatecontact" do
			get("/updatecontact").should route_to("home#updatecontact")
		end
		
		it "should routes to #myself" do
			put("/myself").should route_to("home#myself")
		end
		
		it "should routes to #myselfupdate" do
			get("/myselfupdate").should route_to("home#myselfupdate")
		end
		
		it "should routes to #invite" do
			get("/invite").should route_to("home#tellfriend")
		end
		
		it "should routes to #invitefriend" do
			get("/invitefriend").should route_to("home#invite")
		end
		
		it "should routes to #birthdaysearch" do
			get("/adminmail").should route_to("home#adminmail")
		end
	end
end

