Rails.application.routes.draw do
  root 'home#index'
  get '/profile', to: 'profile#show'
  post '/profile/work', to: 'works#create'
end
