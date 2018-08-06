class Game < ApplicationRecord
  has_many :games_players
  has_many :players, through: :games_players
  before_create :set_board
  after_commit :broadcast
  serialize :board, JSON

  WINNING_POSITIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ].freeze

  def x
    gp = games_players.find_by_piece('X')
    gp.nil? ? nil : gp.player
  end

  def o
    gp = games_players.find_by_piece('O')
    gp.nil? ? nil : gp.player
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
    if status == 'over'
      errors.add(:board, "Game is over")
      false
    elsif board[position].present? || position < 0 || position > 8
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
    if tied?
      "tied"
    elsif winner.present?
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
      # Rails.logger.debug "values_at #{values_at}"
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

  def tied?
    winner.nil? && !board.include?('')
  end

  def broadcast
    game_json = GamesController.render 'games/show.json', assigns: { game: self }
    ActionCable.server.broadcast("game_channel_#{id}", game_json)
  end
end
