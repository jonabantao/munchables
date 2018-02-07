import React from 'react';

const CommentListItem = ({ comment, commenter, authorId }) => {
  const showAuthor = commenter.id === authorId ? 
    <small className="comments-list__author-txt">(author)</small> : '';

  return (
    <li className="comments-list__item-container">
      <article className="comments-list__item">
        <div className="comments-list__commenter-img-container">
          <img src={commenter.profile_img_url}
            alt="profile image"
            className="comments-list__commenter-img"
          />
        </div>
        <div>
          <footer className="comments-list__footer">
            {commenter.username} {showAuthor}
            <p className="comments-list__postdate">
              &nbsp; {comment.postdate}
            </p>
          </footer>
          <div className="comments-list__comment-text">
            {comment.body}
          </div>
        </div>
      </article>
    </li>
  );
};

export default CommentListItem;