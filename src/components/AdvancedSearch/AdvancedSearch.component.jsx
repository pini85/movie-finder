import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "./AdvancedSearch.styles";
import { fetchGenres } from "../../redux/actions/index";
import SelectInput from "../SelectInput/SelectInput.component";
import Input from "../Input/Input.component";

const AdvancedSearch = (props) => {
  const [years, setYears] = useState(null);
  const [rating, setRating] = useState(null);
  const [genres, setGenres] = useState(null);
  const [runTime, setRunTime] = useState(null);
  const [voteCount, setVoteCount] = useState(null);

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
  const runTimes = ["any", 1.5, 2, 3];

  useEffect(() => {
    const fetchData = async () => {
      await props.fetchGenres();
    };
    fetchData();

    let years = [];
    for (let i = new Date().getFullYear(); i > 1902; i--) {
      years.push(<option value={i}>{i}</option>);
    }
    setYears(years);

    let rating = [];
    for (let i = 9; i >= 0; i--) {
      rating.push(<option value={i}>{i}</option>);
    }
    setRating(rating);

    let voteCount = [];
    for (let i = 0; i < voteCounts.length; i++) {
      voteCount.push(<option value={voteCounts[i]}>{voteCounts[i]}</option>);
    }
    setVoteCount(voteCount);

    let runTime = [];
    for (let i = 0; i < runTimes.length; i++) {
      runTime.push(
        <option value={runTimes[i]}>{runTimes[i] + " " + "hours"}</option>
      );
    }
    setRunTime(runTime);
  }, []);

  useEffect(() => {
    let genres = [];
    if (props.genres) {
      for (let i = 0; i < props.genres.length; i++) {
        genres.push(
          <option value={props.genres[i].name}>{props.genres[i].name}</option>
        );
        setGenres(genres);
      }
    }
  }, [props.genres]);

  return (
    <Container>
      <div style={{ marginBottom: "2rem" }}>
        <SelectInput title="from" data={years} />
        <SelectInput title="to" data={years} />
        <SelectInput title="rating" data={rating} />
        <SelectInput title="vote count" data={voteCount} />
        <SelectInput title="genres" data={genres} />
        <SelectInput title="run time more than" data={runTime} />
      </div>
      <div>
        <Input placeholder="actors" />
        <Input placeholder="directors" />
        <Input placeholder="writers" />
      </div>
    </Container>
  );
};

const mapStateProps = (state) => ({
  genres: state.genres,
});

const mapStateToDispatch = {
  fetchGenres: fetchGenres,
};

export default connect(mapStateProps, mapStateToDispatch)(AdvancedSearch);
