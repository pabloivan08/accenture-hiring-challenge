import React from "react";
import './CreatePostButton.css'

const CreatePostButton = ({setOpenModal}) => {
 return(
  <span 
    className="create-post-button"
    onClick={() => setOpenModal(prevState => !prevState)}
  >
    New Post
  </span>
 )
}

export { CreatePostButton }