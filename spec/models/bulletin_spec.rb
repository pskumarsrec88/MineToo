require 'spec_helper'

describe Bulletin do
  
	before(:each) do
		@bulletin = Bulletin.new(:id => "",
					:message => "Hi this is saravana", 
					:user_id => "",
					:created_at => "", 
					:updated_at => "" 
					)
	end
	it { should belong_to(:user)}
 end
 