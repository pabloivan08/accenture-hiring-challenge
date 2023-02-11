import React from "react";
import './SinglePost.css'

const SinglePost = (props) => {
 return(
  <li>
    <h2
      className='post-title'
    >
      Title
    </h2>

    <p>
      Number of Comments
    </p>

    <p>
      Post Description
    </p>

    <h5>
      Category
    </h5>

    <span 
      className='delete-post-button'
      /* onClick={props.onDelete} */
    >
      Delete
    </span>
  </li>
 )
}

export { SinglePost }