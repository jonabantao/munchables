@recipes.each do |recipe|
  json.recipes do
    json.set! recipe.id do
      json.extract! recipe, :id, :title, :body, :author_id
      json.recipe_img_url asset_path(recipe.recipe_img)
    end
  end
  
  # Explicitly done here instead of re-rendering the user partial for all recipes
  json.authors do
    json.set! recipe.author.id do
      json.extract! recipe.author, :username
    end
  end
end