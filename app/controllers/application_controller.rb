class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :ensure_logged_in, :default_image

  def login!(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    @current_user.try(:reset_session_token!)
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def ensure_logged_in
    render json: ["You must be logged in."], status: 403 unless logged_in?
  end

  def default_image(user)
    if user.profile_img_file_name.nil?
      "default-profile#{user.id % 7}.jpg"
    else
      user.profile_img.url
    end
  end
end
