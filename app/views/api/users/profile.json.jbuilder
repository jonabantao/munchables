json.user do
  json.extract! @user, :id, :username

  if @user.profile_img_file_name.nil?
    json.profile_img_url asset_path("default-profile#{@user.id % 7}.jpg")
  else
    json.profile_img_url asset_path(@user.profile_img.url)
  end
end

@user.authored_recipes.each do |recipe|
  json.recipes do
    json.set! recipe.id do
      json.extract! recipe, :id, :title, :author_id, :published
      json.recipe_img_url asset_path(recipe.recipe_img.url(:original))
    end
  end
end