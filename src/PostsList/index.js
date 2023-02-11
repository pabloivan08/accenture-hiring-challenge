import React from "react";
import './PostsList.css'

const PostsList = (props) => {
 return(
  <section>
    <ul>
      {props.children}
    </ul>
  </section>
 )
}

export { PostsList }