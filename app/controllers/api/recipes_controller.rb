class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.includes(:author)
  end

  def create
    @recipe = Recipe.new

    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end
end
