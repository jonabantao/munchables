json.set! comment.id do
  json.extract! comment, :id, :body, :recipe_id, :commenter_id
  json.postdate "#{time_ago_in_words(comment.created_at)} ago"
end