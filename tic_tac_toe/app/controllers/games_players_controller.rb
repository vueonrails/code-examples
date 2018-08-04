class GamesPlayersController < ApplicationController
  def index
    @games_players = current_player.games_players
  end

  def create
    @games_player = current_player.games_players.new(games_player_params)
    if @games_player.save
      render :show, status: :ok, location: @games_player
    else
      render json: { errors: @games_player.errors }, status: :unprocessable_entity
    end
  end

  private

  def games_player_params
    params.require(:games_player).permit(:piece, :game_id)
  end
end
