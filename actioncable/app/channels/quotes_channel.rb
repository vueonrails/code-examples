class QuotesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "quotes_channel"
  end
end