OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '180933804668-5ofotpgfnlu486qam5td61ufnmpfo3fs.apps.googleusercontent.com', '3wFO7j7yPu6J5od0CzN09Djy', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
