class Player < ApplicationRecord
  has_many :games_players
  has_many :games, through: :games_players
end
