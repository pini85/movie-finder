import React, { useState, useEffect, useRef } from "react";
import Input from "../input/Input.component";
import MovieList from "../movieList/MovieList";
import Suggestions from "../Suggestions/Suggestions.component";

import { ApiTmdbQuery } from "../../apis/ApiTmdb";

const Home = () => {
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

  const sendRequest = async () => {
    if (searchQuery.length > 0) {
      setIsSending(true);
      const data = await ApiTmdbQuery(searchQuery);
      setMovieData(data);
      setIsSending(false);
      setUserSuggestions(false);
      setSearchQuery("");
    }
  };

  return (
    <div style={{ background: "var(--primary-color)" }}>
      <Input
        sendRequest={sendRequest}
        handleSearchChange={setSearchQuery}
        isDisabled={isSending}
        value={searchQuery}
      />

      {userSuggestions ? <Suggestions items={userSuggestions} /> : null}

      {movieData ? <MovieList movies={movieData} /> : null}
    </div>
  );
};

export default Home;
