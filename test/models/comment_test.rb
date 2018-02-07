# == Schema Information
#
# Table name: comments
#
#  id           :integer          not null, primary key
#  body         :string           not null
#  commenter_id :integer          not null
#  recipe_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
