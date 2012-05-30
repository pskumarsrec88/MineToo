class MessagesController < ApplicationController
	before_filter :authenticate_user!
	def sendmessage
		@sender=current_user.id				
		@receiver=User.find(params[:id])
		@msg=Message.all(:conditions => ["user_id = ? AND receiver = ?", @sender, @receiver], :order => "created_at DESC")
	end
	
	def sendingmessage
		$msg= Message.new(params[:message])
		$msg.save
		redirect_to "/aftersend"
	end
	
	def aftersend		
		@sender=current_user.name
		@receiver=User.find_by_id($msg.receiver).name
	end
	
	
	
	def showmessage
		@msg=Message.find_all_by_receiver(current_user.id).map(&:user_id).uniq
		@name=Array.new
		@msg_count=Array.new
		@msg.each do |m|
			@name<<User.find_by_id(m).name
			@msg_count<<Message.count("user_id", :conditions=>["user_id = ? AND receiver = ?",m, current_user.id])
		end
	end
	
	def aftershow
		@sender=params[:id]
		@name=User.find_by_id(params[:id]).name
		@msg=Message.all(:conditions => ["user_id = ? AND receiver = ?", @sender, current_user.id], :order => "created_at DESC")
	end
end
