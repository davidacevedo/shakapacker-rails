import React from "react";
import "./App.css";
import Articles from "./Articles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <>
      <h1>React with Rails demo</h1>

      <Link to="/articles_react">
        <Button variant="contained">Articles</Button>
      </Link>
      {/* <Link to="/resources">
        <Button variant="contained">Resources</Button>
      </Link> */}
    </>
  );
};
export default App;
