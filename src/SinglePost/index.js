import React from "react";
import './SinglePost.css'

const SinglePost = ({title, image, description}) => {

  const randomImage = { backgroundImage: image }

  return(
    <li className="preview-post-container" style={randomImage}>
      <h2 className="post-title">
        {title}
      </h2>

      <p className="comments-counter">
        Number of Comments
      </p>

      <p className="post-description">
        {description}
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