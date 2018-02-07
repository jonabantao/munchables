json.comment do
  json.set! @comment.id do
    json.partial! 'api/comments/comment', comment: @comment
  end
end

json.user do
  json.set! comment.commenter.id do
    json.partial! 'api/users/user', user: comment.commenter
  end
end