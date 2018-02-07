class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :delete]

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])

    if @comment
      render "api/comments/show"
    else
      render json: ["Comment not found."], status: 404
    end
  end

  def delete
    @comment = Comment.find(params[:id])

    if @comment.author_id == current_user.id
      @comment.destroy
      render "api/comments/show"
    else
      render json: ["You are not the author of this comment."], status: 403
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
