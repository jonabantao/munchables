json.set! @recipe.id do
    json.extract! @recipe, :id, :title, :body, :recipe_video_url, :created_at
    json.author do
      json.extract! @recipe.author, :id, :username
      json.profile_img_url asset_path(@recipe.author.profile_img.url)
    end
end