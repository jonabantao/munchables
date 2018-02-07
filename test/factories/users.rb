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

FactoryBot.define do
  factory :user do
    username "MyString"
    email "MyString"
    password_digest "MyString"
    session_token "MyString"
    profile_img_url "MyString"
  end
end
