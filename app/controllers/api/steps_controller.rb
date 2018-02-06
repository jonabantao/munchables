class Api::StepsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def create
    @step = Step.new(step_params)

    if @step.save
      render "api/steps/show"
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def show
    @step = Step.find(params[:id])
  end

  def update
    @step = Step.includes(:recipe).find(params[:id])
    
    if @step.recipe.author_id != current_user.try(:id)
      render json: ["You are not the author of this recipe."], status: 403
    elsif @step.update(step_params)
      render "api/steps/show"
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.includes(:recipe).find(params[:id])

    if @step.recipe.author_id != current_user.try(:id)
      render json: ["You are not the author of this recipe."], status: 403
    else
      @step.destroy
      render "api/steps/show"
    end
  end


  private

  def step_params
    params.require(:step).permit(:title, :body, :order, :recipe_id)
  end
end
