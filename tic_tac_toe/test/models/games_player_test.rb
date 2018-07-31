require 'test_helper'

class GamesPlayerTest < ActiveSupport::TestCase
  test "#move" do
    gp = games_players(:one)
    gp.move(2)
    assert_equal ["X","O","X","","","","","",""], gp.game.board
  end

  test "#move not into taken position" do
    gp = games_players(:two)
    gp.move(1)
    assert_not_empty gp.game.errors
  end
end
