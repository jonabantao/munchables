@recipes.each do |recipe|
  json.recipes do
    json.set! recipe.id do
      json.extract! recipe, :id, :title, :author_id, :published
      json.recipe_img_url asset_path(recipe.recipe_img.url(:original))
    end
  end
  
  json.authors do
    json.set! recipe.author.id do
      json.extract! recipe.author, :username
    end
  end
end