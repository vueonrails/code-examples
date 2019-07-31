class ApplicationController < ActionController::Base
  helper_method :current_user
  before_action :current_user

  private

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) || User.create
    session[:user_id] = @current_user.id
    @current_user
  end

end
