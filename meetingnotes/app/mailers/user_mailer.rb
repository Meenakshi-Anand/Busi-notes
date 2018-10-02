class UserMailer < ApplicationMailer


  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'How was your meeting today?')
  end

end
