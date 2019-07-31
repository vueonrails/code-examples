class QuotesController < ApplicationController
  @@thread = nil

  def index
    if @@thread.nil?
      @@thread = Thread.new {
        while true do
          sleep 3
          character = Faker::StarWars.character
          Rails.logger.debug character
          begin
            ActionCable.server.broadcast "quotes_channel", message: "#{character} - #{Faker::StarWars.quote(character.underscore)}"
          rescue
            ActionCable.server.broadcast "quotes_channel", message: "Luke Skywalker - #{Faker::StarWars.quote("luke_skywalker")}"
          end
        end
      }
    end
  end
end