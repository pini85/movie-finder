import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home.component";
import Input from "./components/input/Input.component";
import ShowMovie from "./components/showMovie/ShowMovie.component";

const App = () => {
  return (
    <>
      MOVIE FINDER 2020
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
