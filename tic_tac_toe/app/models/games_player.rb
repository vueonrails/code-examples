class GamesPlayer < ApplicationRecord
  belongs_to :game
  belongs_to :player

  def move(position)
    game.place(piece, position)
  end
end
