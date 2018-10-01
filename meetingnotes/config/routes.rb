Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get '/calendars', to: 'calendar#calendars', as: 'calendars'
  get '/redirect', to: 'calendar#redirect', as: 'redirect'
  get '/callback', to: 'calendar#callback', as: 'callback'
  get '/events/:calendar_id', to: 'calendar#events', as: 'events', calendar_id: /[^\/]+/
  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
