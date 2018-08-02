Rails.application.routes.draw do
  root to: 'games#index'
  resources :games, only: [:index, :show, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
