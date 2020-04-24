import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Papa from "papaparse";
import { fetchActors } from "../../redux/actions/index";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import DisplayPopularActors from "../DisplayPopularActors/DisplayPopularActors.component";

const PopularActors = (props) => {
  useEffect(() => {
    const actors = (data) => {
      let pages = {};
      let names = [];
      const actorsPerPage = 10;
      const totalPages = data && Math.round(data.length / actorsPerPage);
      pages.total_pages = totalPages;
      pages.total_results = data && data.length;

      //

      for (let index in data) {
        names.push(data[index][0]);
      }
      let pageNumber = 1;
      for (let j = 1; j < names.length; j += actorsPerPage) {
        pages[pageNumber] = names.slice(j, j + 10);
        pageNumber++;
      }

      if (Object.keys(pages).length > 0 && pages.total_pages) {
        props.fetchActors(pages, 1);
      }
    };

    actors();
    const parseData = (url, callBack) => {
      Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: (results) => {
          callBack(results.data);
        },
      });
    };
    parseData(
      "https://raw.githubusercontent.com/data-8/tutor/master/Week2/actors.csv",
      actors
    );
  }, []);

  return (
    <>
      <CategoryTitle title="popular actors" />

      {props.actors && <DisplayPopularActors actors={props.actors} />}
    </>
  );
};
const mapStateToProps = (state) => ({
  actors: state.popularActors,
});
export default connect(mapStateToProps, {
  fetchActors: (actors, page) => fetchActors(actors, page),
})(PopularActors);
