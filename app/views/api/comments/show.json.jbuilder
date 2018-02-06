json.set! @commment.id do
  json.extract! @comment, :id, :body, :recipe_id, :author_id
  json.postdate "#{time_ago_in_words(@comment.created_at)} ago"
end