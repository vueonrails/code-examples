class GamesController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  private

  def game_params
    params.require(:game)
  end
end
