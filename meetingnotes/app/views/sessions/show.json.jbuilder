json.set! @user.id do
  json.extract @user, :provider,:name,:oauth_token,:oauth_expires_at,:uid,:code,:refresh_token,:email
end
