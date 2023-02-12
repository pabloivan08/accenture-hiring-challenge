import React from "react";
import './SinglePost.css';

const SinglePost = ({title, description, userId, id}) => {

  const imageAPI = 'url("https://source.unsplash.com/random")'
  const randomImage = { backgroundImage: imageAPI }

  return(
    <li 
      className="preview-post-container" 
      style={randomImage}

    >
      <h2 className="post-title">
        {title}
      </h2>

      <p className="comments-counter">
        User: {userId}
      </p>

      <p className="post-description">
        {description}
      </p>

      <div className="category-delete-container">
        <h5 className="post-category">
          Category
        </h5>

        <div>
          <span 
            className='delete-post-button'
          >
            Edit
          </span>
          <span 
            className='delete-post-button'
          >
            Delete
          </span>
        </div>
      </div>
    </li>
 )
}

export { SinglePost }