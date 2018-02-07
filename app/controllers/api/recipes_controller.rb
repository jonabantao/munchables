class Api::RecipesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

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
    @recipe = Recipe.find_by(id: params[:id])

    if @recipe
      render "api/recipes/show"
    else
      render json: ["Recipe not found."], status: 404
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.author_id != current_user.try(:id) ? @recipe : nil
      render json: ["You are not the author of this recipe."], status: 403
    elsif @recipe.update_attributes(recipe_params)
      render "api/recipes/show"
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])

    if @recipe.author_id == current_user.try(:id)
      @recipe.destroy
      render "api/recipes/show"
    else
      render json: ["This is not yours to destroy."], status: 403
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :body, :recipe_img, :published,
      :recipe_video_url
    )
  end
end
