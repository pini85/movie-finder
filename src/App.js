import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home.component";
import Navbar from "./components/Navbar/Navbar";
import Input from "./components/input/Input.component";
import ShowMovie from "./components/showMovie/ShowMovie.component";
import MovieList from "./components/movieList/MovieList";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/show-list/" component={MovieList} />
          <Route path="/show-movie/" component={ShowMovie} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
