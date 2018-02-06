class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :commenter, 
    class_name: :User, 
    foreign_key: :commenter_id,
    primary_key: :id
  belongs_to :recipe
end
