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

class Recipe < ApplicationRecord
  validates :title, :body, presence: true
  validates :recipe_img, attachment_presence: true

  has_attached_file :recipe_img, default_url: "default-recipe.jpg"
  validates_attachment_content_type :recipe_img, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
  has_many :steps, dependent: :destroy
  has_many :comments, dependent: :destroy

  def self.search_all_words(query)
    search = query.to_s.downcase.gsub(/[^a-z0-9\s-]/i, ' ').strip.split
    search.map! { |word| "title ILIKE '#{word}%' OR title ILIKE '% #{word}%'"}
    term = search.join(" OR ")
    self.where(term)
  end
end
