json.set! step.id do
  json.extract! step, :id, :body, :order, :recipe_id, :title
end