/**
 * @description Main App component for Dog Finder with React Router.
 */

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";

// Dog images
import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";

function App({ dogs }) {
  const dogData = dogs || App.defaultProps.dogs;

  return (
    <div className="App">
      <Nav dogs={dogData} />
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogData} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={dogData} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

// Default props with all dogs' data
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
