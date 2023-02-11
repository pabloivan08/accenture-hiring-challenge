import React from "react";
import './SinglePost.css'

const SinglePost = (props) => {
 return(
  <li className="preview-post-container">
    <h2 className="post-title">
      Post Title
    </h2>

    <p className="comments-counter">
      Number of Comments
    </p>

    <p className="post-description">
      Post Description
    </p>

    <div className="category-delete-container">
      <h5 className="post-category">
        Category
      </h5>

      <span 
        className='delete-post-button'
        /* onClick={props.onDelete} */
      >
        Delete Post
      </span>
    </div>
  </li>
 )
}

export { SinglePost }