import React from "react";
import './Header.css';

const Header = () => {
 return(
  <header className="header-container">
    <div className="subtitle-container">
      <h3 className="header-subtitle subtitle-special">[</h3>
      <h3 className="header-subtitle">
        Making your life Easier
      </h3>
      <h3 className="header-subtitle subtitle-special">]</h3>
    </div>
    <h1 className="header-title">
      Discovering the World
    </h1>
  </header>
 )
}

export { Header }