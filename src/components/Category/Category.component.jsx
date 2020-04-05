import React from "react";
import { connect } from "react-redux";

import {
  fetchNewestMovies,
  fetchHighestRatedMovies,
} from "../../redux/actions";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import MovieListHome from "../MovieListCategory/MovieListCategory.component";
import Option from "../Option/Option.component";
import Pagination from "../Pagination/Pagination.component";
import { Container, OptionContainer } from "./Category.styles";
const Category = ({
  title,
  options,
  optionActive,
  fetchHighestRatedMovies,
  fetchNewestMovies,
  highestRatedMovies,
  newestMovies,
}) => {
  const showList = () => {
    switch (optionActive) {
      case 1:
        return (
          <>
            <Pagination api={fetchNewestMovies} data={newestMovies} />
            <MovieListHome category="newest movies" />
            {/* <Pagination api={fetchNewestMovies} data={newestMovies} /> */}
          </>
        );

      case 2:
        return (
          <>
            <Pagination
              api={fetchHighestRatedMovies}
              data={highestRatedMovies}
            />
            <MovieListHome category="highest rating" />
            <Pagination
              api={fetchHighestRatedMovies}
              data={highestRatedMovies}
            />
          </>
        );
    }
  };
  return (
    <Container>
      <CategoryTitle title={title}></CategoryTitle>

      <OptionContainer>
        {options.map((option) => {
          return (
            <Option
              title={option.title}
              dataType={option.dataType}
              changeUrl={true}
              changeUrlName={option.url}
            ></Option>
          );
        })}
      </OptionContainer>

      {showList()}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  optionActive: state.optionActive,
  highestRatedMovies: state.highestRatedMovies,
  newestMovies: state.newestMovies,
});
export default connect(mapStateToProps, {
  fetchNewestMovies: (page) => fetchNewestMovies(page),
  fetchHighestRatedMovies: (page) => fetchHighestRatedMovies(page),
})(Category);
