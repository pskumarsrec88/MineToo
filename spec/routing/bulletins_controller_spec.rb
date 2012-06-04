require 'spec_helper'

describe BulletinsController do
	describe "route recognition for Bulletin" do
		
		it "should routes to #showbulletin" do
			get("/showbulletin").should route_to("bulletins#showbulletin")
		end
		
		it "should routes to #sendbulletin" do
			post("/sendbulletin").should route_to("bulletins#sendbulletin")
		end
		
		it "should routes to #aftersendbulletin" do
			get("/aftersendbulletin").should route_to("bulletins#aftersendbulletin")
		end
		
		it "should routes to #sendmessage" do
			get("/sendmessage").should route_to("bulletins#sendmessage")
		end
	end
end

