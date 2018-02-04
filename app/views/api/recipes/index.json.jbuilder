@recipes.each do |recipe|
  json.recipe do
    json.set! recipe.id do
      json.extract! recipe, :id, :title, :body, :author_id
    end
  end
  
  # Considered rendering a partial for index but it triggers a re-render
  # for the _user partial for every single recipe - better off just to explicitly
  # name it here.
  json.author do
    json.set! recipe.author.id do
      json.extract! recipe.author, :username
    end
  end
end