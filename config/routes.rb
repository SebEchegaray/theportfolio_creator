Rails.application.routes.draw do
  namespace :api do
    get '/work_experiences', to: 'work_api#index'
    post '/work_experiences', to: 'work_api#create'
    get '/educations', to: 'edu_api#index'
    post '/educations', to: 'edu_api#create'
  end
  root 'home#index'
  # get '/profile', to: 'profile#show'
  # post '/profile/work', to: 'work#create'
  get '/*path' => 'home#index'
end
