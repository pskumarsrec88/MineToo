class MessagesController < ApplicationController
	
	#Filter for authentication  
	before_filter :authenticate_user!
	
	#Action to new message
	def sendmessage
		@sender=current_user.id				
		@receiver=User.find_by_id(params[:id])
		redirect_to "/notfound" if @receiver.blank?
		@msg=Message.all(:conditions => ["user_id = ? AND receiver = ?", @sender, @receiver], :order => "created_at DESC")
	end
	
	#Action for send message
	def sendingmessage
		$msg= Message.new(params[:message])
		$msg.save
		redirect_to "/aftersend"
	end
	
	#Action for after message send page
	def aftersend		
		@sender=current_user.name
		@receiver=User.find_by_id($msg.receiver).name
	end
	
	#Action for show inbox messages
	def showmessage
		@msg=Message.find_all_by_receiver(current_user.id).map(&:user_id).uniq
		@name=Array.new
		@msg_count=Array.new
		@msg.each do |m|
			@name<<User.find_by_id(m).name
			@msg_count<<Message.count("user_id", :conditions=>["user_id = ? AND receiver = ?",m, current_user.id])
		end
	end
	
	#Action for show single user's messages
	def aftershow
		@sender=params[:id]
		@name=User.find_by_id(params[:id]).name
		@msg=Message.all(:conditions => ["user_id = ? AND receiver = ?", @sender, current_user.id], :order => "created_at DESC")
	end
end
