require 'test_helper'

class RailsPerformanceControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    setup_db
    get '/rails/performance'
    assert_response :success
  end

  test "should get index with params" do
    setup_db
    get '/rails/performance', params: { controller_eq: "Home", action_eq: 'index' }
    assert_response :success
  end

  test "should get breakdown with params" do
    setup_db
    get '/rails/performance/breakdown', params: { controller_eq: "Home", action_eq: 'index' }
    assert_response :success
  end

  test "should get crashes with params" do
    setup_db
    get '/rails/performance/crashes'
    assert_response :success
  end

  test "should get requests with params" do
    setup_db
    get '/rails/performance/requests'
    assert_response :success
  end

  test "should get recent with params" do
    setup_db
    get '/rails/performance/recent'
    assert_response :success
  end
end