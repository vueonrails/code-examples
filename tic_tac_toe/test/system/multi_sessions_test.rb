require "application_system_test_case"

class MultiSessionsTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit root_path
    click_on "New Game"
    click_on "Play as X"
    assert_text "You are Playing as X"

    Capybara.using_session :o do
      visit root_path
      click_on "Go to Board", match: :first
      click_on "Play as O"
      assert_text "You are Playing as O"
    end

    x_positions = [0, 4, 8]
    o_positions = [1, 3]

    while x_positions.length > 0
      x_pos = x_positions.shift
      play(x_pos)
      assert_piece(x_pos, :X)

      if o_positions.length > 0
        o_pos = o_positions.shift
        Capybara.using_session :o do
          assert_piece(x_pos, :X)
          play(o_pos)
          assert_piece(o_pos, :O)
        end
        assert_piece(o_pos, :O)
      end
    end

    assert_text "You Win"

    Capybara.using_session :o do
      assert_text "You Lose"
    end

  end
end
