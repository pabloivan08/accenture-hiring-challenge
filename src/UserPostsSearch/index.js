import React from "react";
import './UserPostSearch.css'

const UserPostSearch = () => {
 return(
  <div className="serch-by-user-container">
    <p className="input-description">
      Sort posts by user
    </p>
    <input 
      className="input-field"
      placeholder="Username"
    />
  </div>
 )
}

export { UserPostSearch }