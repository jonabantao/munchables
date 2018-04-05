require 'rails_helper'

RSpec.describe "routing to recipes", :type => :routing do
  it "GET /api/recipes/:recipe_id returns a JSON formatted recipe" do
    expect(:get => "/api/recipes/1").to route_to(
      controller: "api/recipes",
      action: "show",
      id: "1",
      format: :json
    )
  end
end