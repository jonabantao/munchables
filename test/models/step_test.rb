# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :string
#  order      :integer          not null
#  recipe_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StepTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
