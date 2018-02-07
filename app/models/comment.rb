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

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :commenter, 
    class_name: :User, 
    foreign_key: :commenter_id,
    primary_key: :id
  belongs_to :recipe
end
