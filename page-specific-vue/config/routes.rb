Rails.application.routes.draw do
  resources :pages
  get "second", to: "pages#second"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
