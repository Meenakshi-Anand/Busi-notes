OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '295854032498-3ho1d2ppr8nn84s85mqk60cgvl9bvkir.apps.googleusercontent.com', 'DvSJdlmkvb5I7JSBtbgyTb50', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
