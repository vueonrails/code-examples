class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_channel_#{params[:game_id]}"
  end

  def unsubscribed
    # TODO forfeit game
  end
end
