class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :delete]

  def index
    @comments = Comment.includes(:commenter).where(recipe_id: params[:recipeId])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.includes(:commenter).find_by(id: params[:id])

    if @comment
      render "api/comments/show"
    else
      render json: ["Comment not found."], status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.commenter_id == current_user.id
      @comment.destroy
      render "api/comments/show"
    else
      render json: ["You are not the author of this comment."], status: 403
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :recipe_id)
  end
end
