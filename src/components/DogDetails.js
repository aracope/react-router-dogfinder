import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DogDetails.css";

/**
 * @description Displays detailed information about a single dog.
 */
function DogDetails({ dogs = [] }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return (
      <div className="dog-details">
        <h2>Dog not found</h2>
        <Link to="/dogs">Back to all dogs</Link>
      </div>
    );
  }

  return (
    <div className="dog-details">
      <h2>{dog.name}</h2>
      <img
        src={dog.src}
        alt={dog.name}
      />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to all dogs</Link>
    </div>
  );
}

export default DogDetails;
