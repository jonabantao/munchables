# == Schema Information
#
# Table name: recipes
#
#  id                      :integer          not null, primary key
#  title                   :string           not null
#  body                    :string           not null
#  author_id               :integer          not null
#  recipe_video_url        :string
#  published               :boolean          default(FALSE)
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  recipe_img_file_name    :string
#  recipe_img_content_type :string
#  recipe_img_file_size    :integer
#  recipe_img_updated_at   :datetime
#

require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
