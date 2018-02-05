json.recipe do
  json.extract! @recipe, :id, :title, :body, :author_id, :recipe_video_url,
    :created_at, :recipe_img
  json.recipe_img_url asset_path(@recipe.recipe_img.url)
end

json.author do
  json.partial! 'api/users/user', user: @recipe.author
end