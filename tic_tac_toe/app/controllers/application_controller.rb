class ApplicationController < ActionController::Base
  helper_method :current_player
  before_action :current_player

  def current_player
    @current_player ||= Player.find_by_id(session[:player_id]) || Player.create
    session[:player_id] = @current_player.id
    @current_player
  end
end
