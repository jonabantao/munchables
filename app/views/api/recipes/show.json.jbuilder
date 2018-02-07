json.recipe do
  json.extract! @recipe, :id, :title, :body, :author_id, :recipe_video_url,
    :recipe_img, :published
  json.creation @recipe.created_at.to_date
  json.recipe_img_url asset_path(@recipe.recipe_img.url(:original))
end

json.author do
  json.partial! 'api/users/user', user: @recipe.author
end

json.steps do
  @recipe.steps.each do |step|
    json.partial! 'api/steps/step', step: step
  end
end