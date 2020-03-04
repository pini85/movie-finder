import React, { useState, useEffect, useRef } from "react";
import Input from "../input/Input.component";
import MovieList from "../movieList/MovieList";
import Suggestions from "../Suggestions/Suggestions.component";
import { YifyService } from "yify-api";

import { ApiTmdbQuery } from "../../apis/ApiTmdb";

const Home = () => {
  const [test, setTest] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [movieData, setMovieData] = useState(false);
  const [userSuggestions, setUserSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const initialRender = useRef(true);

  useEffect(() => {
    const handleSearchChange = async () => {
      if (initialRender.current) {
        initialRender.current = false;
      } else {
        if (searchQuery.length > 0) {
          const data = await ApiTmdbQuery(searchQuery);
          setUserSuggestions(data);
        } else {
          setUserSuggestions(false);
        }
      }
    };
    handleSearchChange();
  }, [searchQuery]);

  const sendRequest = async e => {
    console.log(e);

    if (searchQuery.length > 0) {
      if (e.charCode == 13 || e.target) {
        setIsSending(true);
        const data = await ApiTmdbQuery(searchQuery);
        setMovieData(data);
        setIsSending(false);
        setUserSuggestions(false);
        setSearchQuery("");
      }
    }
  };
  // useEffect(() => {
  //   const fetcher = async () => {
  //     const data = await fetch(
  //       "https://yts.mx/api/v2/movie_details.json?movie_id=11"
  //     );
  //     const x = await data.json();
  //     setTest(x);
  //   };
  //   fetcher();
  // }, []);

  return (
    <div style={{ background: "var(--primary-color)" }}>
      <Input
        sendRequest={sendRequest}
        handleSearchChange={setSearchQuery}
        isDisabled={isSending}
        value={searchQuery}
      />
      {console.log(test)}

      {userSuggestions ? <Suggestions items={userSuggestions} /> : null}

      {movieData ? <MovieList movies={movieData} /> : null}
    </div>
  );
};

export default Home;
