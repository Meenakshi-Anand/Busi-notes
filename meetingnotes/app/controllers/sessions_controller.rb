class SessionsController < ApplicationController
  def create

    @user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = @user.id
    redirect_to calendars_url
  end

  def destroy
    session[:user_id] = nil
    render {}
  end
end
