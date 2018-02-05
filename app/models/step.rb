class Step < ApplicationRecord
  validates :title, :body, :order, presence: true

  belongs_to :recipe
end
