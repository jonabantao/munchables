json.user do
  json.set! @user.id do
    json.extract! @user, :id, :username
    json.join_date "Joined #{@user.created_at.strftime("%B %d %Y")}"

    if @user.profile_img_file_name.nil?
      json.profile_img_url asset_path("default-profile#{@user.id % 7}.jpg")
    else
      json.profile_img_url asset_path(@user.profile_img.url)
    end
    json.comment_count @user.authored_comments.count
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