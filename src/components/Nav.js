/**
 * @description Navigation bar listing all dogs.
 */

import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs = [] }) {
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs" className="Nav-link">
        All Dogs
      </NavLink>
      {dogs.map((dog) => (
        <NavLink
          key={dog.name}
          to={`/dogs/${dog.name.toLowerCase()}`}
          className="Nav-link"
        >
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
