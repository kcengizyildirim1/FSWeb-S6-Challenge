import React from "react";
import APIClient from "./api/APIClient";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">STARWARS CHARACTERS</h1>
      <APIClient />
    </div>
  );
};

export default App;
