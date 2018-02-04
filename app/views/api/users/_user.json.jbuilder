json.extract! user, :id, :username
json.profile_img_url asset_path(user.profile_img.url)