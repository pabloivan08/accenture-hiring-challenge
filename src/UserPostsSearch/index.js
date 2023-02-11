import React from "react";
import './UserPostSearch.css'

const UserPostSearch = ({ searchedUser, setSearchedUser }) => {

  const onSetValueChange = (event) => {
    setSearchedUser(event.target.value)
  }

  return(
    <div className="serch-by-user-container">
      <p className="input-description">
        Sort by Username
      </p>
      <input 
        className="input-field"
        placeholder="Username"
        value={searchedUser}
        onChange={onSetValueChange}
      />
    </div>
  )
}

export { UserPostSearch }