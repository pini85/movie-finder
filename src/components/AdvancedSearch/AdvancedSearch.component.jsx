import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  SearchContainer,
  DisplaySearchContainer,
} from "./AdvancedSearch.styles";
import {
  fetchGenres,
  createAdvancedSearch,
  fetchAdvancedSearch,
} from "../../redux/actions/index";
import SelectInput from "../SelectInput/SelectInput.component";
import Input from "../Input/Input.component";
import Button from "../Button/Button";

const AdvancedSearch = (props) => {
  const [createYears, setCreateYears] = useState(null);
  const [createRating, setCreateRating] = useState(null);
  const [createGenres, setCreateGenres] = useState(null);
  const [createRunTime, setCreateRunTime] = useState(null);
  const [createVoteCount, setCreateVoteCount] = useState(null);
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [rating, setRating] = useState("");
  const [voteCount, setVoteCount] = useState("");
  const [genres, setGenres] = useState("");
  const [runTime, setRunTime] = useState("");
  const [actors, setActors] = useState("");
  const [directors, setDirectors] = useState("");
  const [writers, setWriters] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await props.fetchGenres();
    };
    fetchData();

    let years = [];
    for (let i = new Date().getFullYear(); i > 1902; i--) {
      years.push(<option value={i}>{i}</option>);
    }
    setCreateYears(years);

    let rating = [];
    for (let i = 9; i >= 0; i--) {
      rating.push(<option value={i}>{i}</option>);
    }
    setCreateRating(rating);

    let voteCount = [];
    for (let i = 0; i < voteCounts.length; i++) {
      voteCount.push(<option value={voteCounts[i]}>{voteCounts[i]}</option>);
    }
    setCreateVoteCount(voteCount);

    let runTime = [];
    for (let i = 0; i < runTimes.length; i++) {
      runTime.push(
        <option value={runTimes[i]}>{`${runTimes[i]} hours >`}</option>
      );
    }
    setCreateRunTime(runTime);
  }, []);

  useEffect(() => {
    let genres = [];
    if (props.genres) {
      for (let i = 0; i < props.genres.length; i++) {
        genres.push(
          <option value={props.genres[i].name}>{props.genres[i].name}</option>
        );
        setCreateGenres(genres);
      }
    }
  }, [props.genres]);
  const voteCounts = [
    20000,
    15000,
    10000,
    9000,
    8000,
    7000,
    6000,
    5000,
    4000,
    3000,
    2000,
    1000,
    500,
    100,
  ];
  const runTimes = ["any", 1, 1.5, 2, 3];

  const handleOnChange = (e) => {
    const type = e.target.getAttribute("data-tag");
    const value = e.target.value;

    switch (type) {
      case "from-year":
        setFromYear(value);
        break;
      case "to-year":
        setToYear(value);
        break;
      case "rating":
        setRating(value);
        break;
      case "vote-count":
        setVoteCount(value);
        break;
      case "genres":
        setGenres(value);
        break;
      case "run-time":
        setRunTime(parseInt(value) * 60);
        break;
      case "actors":
        setActors(value);
        break;
      case "directors":
        setDirectors(value);
        break;
      case "writers":
        setWriters(value);
        break;
    }
  };

  const handleSubmit = () => {
    const editFromYear = `${fromYear}-01-01`;
    const editToYear = `${toYear}-01-01`;
    const searchObj = {
      fromYear: fromYear ? editFromYear : fromYear,
      toYear: toYear ? editToYear : toYear,
      rating,
      voteCount,
      genres,
      runTime,
      actors,
      directors,
      writers,
    };
    props.createAdvancedSearch(searchObj);
    props.fetchAdvancedSearch();
  };

  return (
    <Container>
      <SearchContainer>
        <div style={{ marginBottom: "2rem" }}>
          <SelectInput
            value={fromYear}
            name="from-year"
            title="From"
            data={createYears}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={toYear}
            name="to-year"
            title="To"
            data={createYears}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={rating}
            name="rating"
            title="Minimum Rating"
            data={createRating}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={voteCount}
            name="vote-count"
            title="Minimum Votes"
            data={createVoteCount}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={genres}
            name="genres"
            title="Genres"
            data={createGenres}
            handleOnChange={handleOnChange}
          />
          <SelectInput
            value={runTime}
            name="run-time"
            title="Minimum Runtime"
            data={createRunTime}
            handleOnChange={handleOnChange}
          />
        </div>
        <div>
          <Input
            handleOnChange={handleOnChange}
            value={actors}
            name="actors"
            placeholder="actors"
          />
          <Input
            handleOnChange={handleOnChange}
            value={directors}
            name="directors"
            placeholder="directors"
          />
          <Input
            handleOnChange={handleOnChange}
            value={writers}
            name="writers"
            placeholder="writers"
          />
        </div>
        <Button handleClick={handleSubmit} title="search"></Button>
      </SearchContainer>
      <DisplaySearchContainer></DisplaySearchContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  search: state.advancedSearch,
});

const mapStateToDispatch = {
  fetchGenres: fetchGenres,
  createAdvancedSearch: createAdvancedSearch,
  fetchAdvancedSearch: fetchAdvancedSearch,
};

export default connect(mapStateToProps, mapStateToDispatch)(AdvancedSearch);
