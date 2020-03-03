import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home.component";
import Navbar from "./components/Navbar/Navbar";
import Input from "./components/input/Input.component";
import ShowMovie from "./components/showMovie/ShowMovie.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/show-movie/" component={ShowMovie} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
