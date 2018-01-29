class User < ApplicationRecord
  has_secure_password

  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = self.class.find_by(username: username).try(:authenticate, password)

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
