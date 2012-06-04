require 'spec_helper'

describe MessagesController do
	describe "route recognition for Message" do
		
		it "should routes to #aftersend" do
			get("/aftersend").should route_to("messages#aftersend")
		end
		
		it "should routes to #showmessage" do
			get("/showmessage").should route_to("messages#showmessage")
		end
		
		it "should routes to #sendingmessage" do
			post("/sendingmessage").should route_to("messages#sendingmessage")
		end
	end
end

