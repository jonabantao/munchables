json.extract! user, :id, :username

json.profile_img_url asset_path("default-profile#{user.id % 2}.jpg")




#asset_path(user.profile_img.url)