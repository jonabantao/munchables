# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :string
#  order      :integer          not null
#  recipe_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord
  validates :order, presence: true

  belongs_to :recipe
end
