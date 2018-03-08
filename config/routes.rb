Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :recipes, except: [:new, :edit, :destroy] # <= Destroy to be implemented later
    resources :steps, except: [:new, :edit]
    resources :comments, only: [:index, :create, :show, :destroy]
  end
end
