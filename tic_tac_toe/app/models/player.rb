class Player < ApplicationRecord
  validates_uniqueness_of :name, allow_nil: true, allow_blank: false
  has_many :games_players
  has_many :games, through: :games_players
end
