/**
 * @description Displays a list of all dogs.
 */

import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

function DogList({ dogs = [] }) {


  if (!dogs || dogs.length === 0) {
    return <p>No dogs available.</p>;
  }

  return (
    <div>
      <h2>Meet Our Dogs</h2>
      <div>
        {dogs.map((dog) => (
          <div key={dog.name}>
            <h3>{dog.name}</h3>
            <img
              src={dog.src}
              alt={dog.name}
            />
            <p>Age: {dog.age}</p>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>See more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
