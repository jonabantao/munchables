class Step < ApplicationRecord
  validates :order, presence: true

  belongs_to :recipe
end
