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
    assert_selector "##{piece}#{position}"
  end
end
