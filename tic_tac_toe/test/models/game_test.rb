require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test "#status should be playing when players have joined" do
    assert_equal "playing", games(:one).status
  end

  test "#status should bo over when won" do
    assert_equal "over", games(:two).status
  end
end
