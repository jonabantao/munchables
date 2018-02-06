Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :recipes, except: [:new, :edit, :destroy]
    resources :steps, except: [:new, :edit]
    resources :comments, only: [:create, :show, :destroy]
  end
end
