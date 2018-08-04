class PlayersController < ApplicationController
  before_action :set_player

  def show

  end

  def update
    if @player.update(player_params)
      render :show, status: :ok, location: @player
    else
      render json: { errors: @player.errors }, status: :unprocessable_entity
    end
  end

  private

  def player_params
    params.require(:player).permit(:id, :name)
  end

  def set_player
    @player = current_player
  end
end
