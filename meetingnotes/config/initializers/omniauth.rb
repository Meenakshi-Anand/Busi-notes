Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '295854032498-3ho1d2ppr8nn84s85mqk60cgvl9bvkir.apps.googleusercontent.com', 'DvSJdlmkvb5I7JSBtbgyTb50', {
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar',
    redirect_uri:'http://localhost:3000/api/auth/google_oauth2/callback'
  }
end
