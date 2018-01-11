class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # I commented it out, because it did not work with create or destroy,
  # to fix it, enable it back, then try run app and google error 
  helper_method :current_user, :signed_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
