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

FactoryBot.define do
  factory :comment do
    body "MyString"
    author_id 1
    recipe_id 1
  end
end
