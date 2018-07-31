class Game < ApplicationRecord
  has_many :games_players
  has_many :players, through: :games_players
  before_create :set_board
  serialize :board, JSON

  WINNING_POSITIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 5], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ].freeze

  def x
    pg = games_players.find_by_piece('X')
    pg.nil? ? nil : pg.player
  end

  def o
    pg = games_players.find_by_piece('O')
    pg.nil? ? nil : pg.player
  end

  def turn
    count_x = board.count('X')
    count_o = board.count('O')
    if count_x - count_o == 1
      'O'
    else
      'X'
    end
  end

  # TODO create custom validation
  def place(piece, position)
    if board[position].present? || position < 0 || position > 8
      errors.add(:board, "Invalid board position")
      false
    elsif piece != turn
      errors.add(:board, "Not your turn")
      false
    else
      board[position] = piece
      save
    end
  end

  def status
    if winner.present?
      "over"
    elsif x.present? && o.present?
      "playing"
    else
      "waiting"
    end
  end

  def winner
    result = nil
    WINNING_POSITIONS.each do |position|
      values_at = board.values_at(*position)
      Rails.logger.debug "values_at #{values_at}"
      if values_at.count('X') == 3
        result = x
        break
      elsif values_at.count('O') == 3
        result = o
        break
      end
    end
    result
  end

  private

  def set_board
    self.board = [''] * 9
  end
end
