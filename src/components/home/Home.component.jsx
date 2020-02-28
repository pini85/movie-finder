import React, { useState, useEffect, useCallback } from "react";
import Input from "../input/Input.component";
import MovieList from "../movieList/MovieList";
import ApiOmdb from "../../apiOmdb";

const Home = () => {
  const [isSending, setIsSending] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setQueryData] = useState("");
  const [toggle, setToggle] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    const data = await ApiOmdb(searchQuery);
    setMovieData(data);
    setIsSending(false);
  }, [isSending]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?t=${searchQuery}&apikey=${apiKey}`
  //     );
  //     const data = await response.json();
  //     setMovieData(data);
  //   };
  //   fetchData();
  // }, [searchQuery]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
  //     );
  //     const data = await response.json();
  //     setMovieData(data);
  //   };
  //   fetchData();
  // }, [toggle]);

  const handleSearchChange = e => {
    setQueryData(e.target.value);
  };

  return (
    <div>
      <Input
        sendRequest={sendRequest}
        handleSearchChange={handleSearchChange}
        isDisabled={isSending}
      />
      {movieData ? <MovieList movies={movieData} /> : null}
    </div>
  );
};

export default Home;
