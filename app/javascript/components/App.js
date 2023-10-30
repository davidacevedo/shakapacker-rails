import React from "react";
import "./App.css";
import Articles from "./Articles";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Articles React</h1>
      <Articles />
      <Link to="/articles_react/123">Articles</Link>
    </>
  );
};
export default App;
