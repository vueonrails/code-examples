class ApplicationController < ActionController::Base
  helper_method :current_player

  def current_player
    @current_player ||= Player.find(session[:player_id]) || Player.create
    session[:player_id] = @current_player.id
    @current_player
  end
end
