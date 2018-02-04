class Recipe < ApplicationRecord
  validates :title, :body, presence: true

  has_attached_file :recipe_img, default_url: nil
  validates_attachment_content_type :recipe_img, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
end
