import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchNewestMovies } from "../../redux/actions";
import Option from "../Option/Option.component";
import { OptionsContainer } from "./Options.styles";

const Options = props => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  useEffect(() => {
    if (active1) {
      console.log("im here");

      setActive2(false);
      setActive3(false);
      // props.newestMovies();
      console.log("active1");
    }
    if (active2) {
      setActive1(false);
      setActive3(false);
      console.log("active2");
    }
    if (active3) {
      setActive1(false);
      setActive2(false);
      console.log("active3");
    }

    // const x = props.newestMovies();
    // console.log(x);
  }, [active1, active2, active3]);
  return (
    <OptionsContainer>
      <Option setActive={setActive1} title="Newest Movies"></Option>
      <Option setActive={setActive2} title="Highest Rating"></Option>
      <Option setActive={setActive3} title="Recommded for you"></Option>
    </OptionsContainer>
  );
};
const mapStateToDispatch = {
  newestMovies: fetchNewestMovies
};
const mapStateToProps = state => ({
  newestMoviesData: state.newestMovies
});

export default connect(mapStateToProps, mapStateToDispatch)(Options);
