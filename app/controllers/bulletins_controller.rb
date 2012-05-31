class BulletinsController < ApplicationController
	
	before_filter :authenticate_user!
	def sendbulletin		
	end
	
	def find
		@mesg=Bulletin.all(:conditions => ["birth_date = ?", current_user.date_of_birth], :order => "created_at DESC")
		if @mesg.present?
			@sender=Array.new
			@mesg.each do |send|
				@sender<<User.find_by_id(send.sender).name
			end
		end
	end
	
	
	def aftersendbulletin
		find
	end
	
	def showbulletin
		
		find
	end
	
	def sendmessage
		@msg= Bulletin.new(params[:message])
		unless params[:message][:message].empty?
			@msg.save
			redirect_to "/aftersendbulletin"
		else
			flash[:alert] = "Empty message not allowed"
			render :sendbulletin
		end
	end
	
end
