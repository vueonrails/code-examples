class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def show
    @game = Game.find(params[:id])
  end

  def create
    @game = Game.create
    render :show, status: :ok, location: @game
  end

  private

  def game_params
    params.require(:game)
  end
end
