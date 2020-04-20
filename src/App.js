import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home.component";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search.component";
import Movies from "./components/Movies/Movies.component";
import ShowMovie from "./components/showMovie/ShowMovie.component";
import MovieListSearch from "./components/MovieListSearch/MovieListSearch";
import TvShows from "./components/TvShows/TvShows.component";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch.component";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:category/page/:page" component={Movies} />
        <Route exact path="/tv/:category/page/:page" component={TvShows} />
        <Route
          exact
          path="/search/:query/page/:page"
          component={MovieListSearch}
        />
        <Route
          exact
          path="/advanced-search/:query/page/:page"
          component={MovieListSearch}
        />
        <Route path="/movie/:id" component={ShowMovie} />
        <Route path="/advanced-search" component={AdvancedSearch} />
      </Switch>
    </Router>
  );
};

export default App;
