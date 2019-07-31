require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get games_index_url
    assert_response :success
  end

  test "should get show" do
    get games_show_url
    assert_response :success
  end

  test "should get create" do
    get games_create_url
    assert_response :success
  end

end
