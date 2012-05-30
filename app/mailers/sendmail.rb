class Sendmail < ActionMailer::Base
  default :from => "pskcoolking@gmail.com"
  def tellfriend(contact)
    url="http://localhost:3000/home"
    #~ @friend_name=fn
    #~ @friend_email=fe
    mail(:to=>contact[:email], :subject=>"Welcome to Minetoo", :body=>"Your Friend "+contact[:your_name]+" ["+contact[:your_name]+"]"+" invites you to MineToo. Click the link to enter the application "+url)
  end
  
  def contactadmin(contact)
       mail(:to=>contact[:to], :subject=>contact[:subject], :body=>contact[:message])
  end
end
