json.extract! user, :id, :username

if user.profile_img_file_name.nil?
  json.profile_img_url asset_path("default-profile#{user.id % 7}.jpg")
else
  json.profile_img_url asset_path(user.profile_img.url)
end