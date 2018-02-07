import React from 'react';

const CommentListItem = (props) => {
  return (
    <li className="comments-list__item-container">
      <article className="comment-list__item">
        <div>
          {/* <img src={props.comment.profile_img_url}
            alt="profile image"
            className="navbar__profile-img"
          /> */}
        </div>
        <div>
        </div>
      </article>
    </li>
  );
};

export default CommentListItem;