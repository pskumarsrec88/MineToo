require 'spec_helper'

describe User do
  
	before(:each) do
		@user = User.new(:id => "",
					:email => "pskcoolking@gmail.com",
					:crypted_password => "c3c441437a86451655a4d33a6aec7c3e02cf17cc", 
					:salt => "",
					:remember_token => nil, 
					:remember_token_expires_at => nil,
					:reset_code => "",
					:ip_address => "",
					:name => "saravana", 
					:sex => "male", 
					:hour_of_birth => "12am", 
					:living_city => "chennai", 
					:living_country => "india", 
					:born_city => "namakkal", 
					:born_country => "india", 
					:biography => "Hi this is saravanan",
					:created_at => "", 
					:updated_at => "" 
					)
	end
	
	 it { should have_many(:messages)}	
 end
 