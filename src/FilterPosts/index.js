import React from "react";
import './FilterPosts.css';

const FilterPosts = () => {
 return(
  <nav>
    <ul className="filter-container">
      <li className="filter-item">All</li>
      <li className="filter-item">Travel</li>
      <li className="filter-item">Lifetyle</li>
      <li className="filter-item">Business</li>
      <li className="filter-item">Food</li>
      <li className="filter-item">Work</li>
    </ul>
  </nav>
 )
}

export { FilterPosts }