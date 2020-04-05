import React from "react";
import { connect } from "react-redux";
import { optionActive } from "../../redux/actions";

import Category from "../Category/Category.component";

const Movies = () => {
  const options = [
    {
      title: "newest movies",
      dataType: 1,
      url: "latest",
    },
    {
      title: "highest rating",
      dataType: 2,
      url: "top",
    },
  ];
  return (
    <>
      <Category title="movies" options={options} />
    </>
  );
};

export default connect(null, {
  optionActive: (e) => optionActive(e),
})(Movies);
