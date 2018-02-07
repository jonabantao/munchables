# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  email                    :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  profile_img_file_name    :string
#  profile_img_content_type :string
#  profile_img_file_size    :integer
#  profile_img_updated_at   :datetime
#

class User < ApplicationRecord
  has_secure_password

  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :profile_img, default_url: "default-profile.png"
  validates_attachment_content_type :profile_img, content_type: /\Aimage\/.*\Z/

  before_validation :ensure_session_token

  has_many :authored_recipes,
    class_name: :Recipe,
    foreign_key: :author_id,
    primary_key: :id
  has_many :authored_comments,
    class_name: :Comment,
    foreign_key: :commenter_id,
    primary_key: :id



  def self.find_by_credentials(username, password)
    user = User.find_by(username: username).try(:authenticate, password)

    user ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
