import React from 'react';
import { Link } from 'react-router-dom';

const CommentListItem = ({ comment, commenter, authorId, currentUser, removeComment }) => {
  if (!commenter) {
    return '';
  }


  const showAuthor = (commenter && commenter.id === authorId) ? 
    <small className="comments-list__author-txt">(author)</small> : '';

  const showDelete = (currentUser && commenter && currentUser.id === commenter.id) ?
    <button 
      onClick={() => removeComment(comment.id)} 
      className="comments-list__remove-comment"
    >
      &times;
    </button> : '';

  return (
    <li className="comments-list__item-container">
      <article className="comments-list__item">
        <div className="comments-list__commenter-img-container">
          <div className="comments-list__img-wrapper">
          <img src={commenter.profile_img_url}
            alt="profile image"
            className="comments-list__commenter-img"
          />
          </div>
        </div>
        <div className="comments-list__author-info">
          <footer className="comments-list__footer">
            <div>
              <span className="comments-list__author-name">
                <Link to={`/users/${commenter.id}/`}>
                  {commenter.username}
                </Link>
              </span>
               &nbsp;{showAuthor}
              <p className="comments-list__postdate">
                &nbsp; {comment.postdate}
              </p>
            </div>
            {showDelete}
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