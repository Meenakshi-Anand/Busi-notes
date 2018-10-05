Rails.application.routes.draw do
namespace :api, defaults: { format: :json } do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get '/redirect', to: 'calendar#redirect', as: 'redirect'
  get '/callback', to: 'calendar#callback', as: 'callback'
  resources :sessions, only: [:create, :destroy]

  get '/calendars', to: 'calendar#calendars', as: 'calendars'
  get '/events/:calendar_id', to: 'calendar#events', as: 'events', calendar_id: /[^\/]+/

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
  root "static_pages#root"
end
