class GamesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json {
        limit = params[:limit].present? ? params[:limit].to_i : 10
        page = params[:page].present? ? params[:page].to_i : 1
        @games = Game.order("created_at desc").limit(limit).offset((page - 1) * limit)
      }
    end
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
