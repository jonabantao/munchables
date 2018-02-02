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
