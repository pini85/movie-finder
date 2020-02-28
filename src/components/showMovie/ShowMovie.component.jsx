import React from "react";

const ShowMovie = props => {
  const data = props.location.state.data;
  return (
    <div>
      HELLO
      {console.log(data)}
    </div>
  );
};

export default ShowMovie;
