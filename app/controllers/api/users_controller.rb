class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:authored_recipes).find_by(id: params[:id])

    if @user
      render "/api/users/profile"
    else
      render json: ["No user found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username, 
      :email, 
      :password,
      :password_confirmation, 
      :profile_img_url)
  end
end
