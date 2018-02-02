json.extract! @user, :id, :username, :email
json.profile_img_url asset_path(@user.profile_img.url)