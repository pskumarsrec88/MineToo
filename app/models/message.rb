class Message < ActiveRecord::Base
	belongs_to :user	
	validates_presence_of  :message, :user_id, :receiver
	validates :message, :length=>{:minimum=>15, :message=>"Message too short! Must be at least 15 characters"}
end

