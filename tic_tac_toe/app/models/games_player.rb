class GamesPlayer < ApplicationRecord
  belongs_to :game
  belongs_to :player
  validates_inclusion_of :piece, in: ['X', 'O']
  validates_uniqueness_of :piece, scope: [:game, :player]

  def move(position)
    game.place(piece, position)
  end
end
