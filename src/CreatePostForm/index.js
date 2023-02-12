import React from "react";
import './CreatePostForm.css'

const CreatePostForm = ({setOpenModal}) => {
  return(
    <form formAction="" className="form-container">
      <h3>Create new post</h3>
      <label htmlFor="name" className="label-container">
        <span>Title</span>
        <input id="name" type="text" />
      </label>
      <label htmlFor="description" className="label-container">
        <span>Description</span>
        <textarea id="description" />
      </label>
      <label htmlFor="category" className="label-container">
        <span>Categoty</span>
        <input id="category" type="text" />
      </label>
      <label htmlFor="image-url" className="label-container">
        <span>Image URL</span>
        <input id="image-url" type="text" />
      </label>
      <button type="submit" className="submit-button">Post</button>
      <button 
        type="submit" 
        className="cancel-button"
        onClick={() => setOpenModal(prevState => !prevState)}
      >
        Cancel
      </button>
    </form>
  )
}

export { CreatePostForm }