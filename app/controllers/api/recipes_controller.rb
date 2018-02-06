class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.where(published: true).includes(:author, :steps)
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

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update_attributes(recipe_params)
      render 'api/recipes/show'
    else
      render json: @concept.errors, status: 422
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :body, :recipe_img, :published,
      :recipe_video_url
    )
  end
end
