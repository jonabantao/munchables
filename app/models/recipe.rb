class Recipe < ApplicationRecord
  validates :title, :body, presence: true
  # validates :recipe_img, attachment_presence: true

  has_attached_file :recipe_img, default_url: "default-recipe.jpg"
  validates_attachment_content_type :recipe_img, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
  has_many :steps
end
