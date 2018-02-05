class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.includes(:author)
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.author_id = current_user.id

    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :body, :recipe_img, :published)
  end
end
