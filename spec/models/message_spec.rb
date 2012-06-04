require 'spec_helper'

describe Message do
  
	before(:each) do
		@message = Message.new(:id => "",
					:message => "Hi this is saravana", 
					:user_id => "", 
					:receiver => "5",
					:created_at => "", 
					:updated_at => "" 
					)
	end
	it { should belong_to(:user)}			
 end
 