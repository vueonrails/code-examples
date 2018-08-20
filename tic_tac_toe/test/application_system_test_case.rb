require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: :chrome, screen_size: [1400, 1400]

  def sign_in(name="name")
    fill_in '.form-control', with: name
    click_on "Save"
  end

  def play(position)
    page.all("rect")[position].click
  end

  def assert_piece(position, piece)
    piece_ids = {
      X: [
        '#b1J3J3u53u', '#d5dGefT03', '#b4rCcqG9M2',
        '#edMUL8MKj', '#b3iRLvZeTI', '#bM5pWK78k',
        '#aalyDEzGM', '#aHsYD8uiN', '#bx9FJFzLH'
      ],
      O: [
        '#c3tmsvTYqT', '#d6mu4XE1Zq', '#cdxBmq8ac',
        '#c2fgghO5XC', '#a3cg5A5jh9', '#a4uHcLt7ce',
        '#b2SCXRPcte', '#a1MaLXdBcm', '#b2y1GcQSH'
      ]
    }
    assert_selector piece_ids[piece][position]
  end
end
