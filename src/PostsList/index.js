import React from "react";
import './PostsList.css'

const PostsList = (props) => {
 return(
  <section className="main-container">
    <ul className="posts-grid">
      {props.children}
    </ul>
  </section>
 )
}

export { PostsList }