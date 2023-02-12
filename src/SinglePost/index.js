import React from "react";
import './SinglePost.css'

function deletePost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

const SinglePost = ({title, image, description, userId, id}) => {

  const randomImage = { backgroundImage: image }

  return(
    <li className="preview-post-container" style={randomImage}>
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
            onClick={() => deletePost(id)}
          >
            Edit
          </span>
          <span 
            className='delete-post-button'
            onClick={() => deletePost(id)}
          >
            Delete
          </span>
        </div>
      </div>
    </li>
 )
}

export { SinglePost }