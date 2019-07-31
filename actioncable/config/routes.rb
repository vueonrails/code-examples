Rails.application.routes.draw do
  resources :quotes, only: [:index]
end
