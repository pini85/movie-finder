import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSubtitles } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { SpinnerContainer } from "./showSubtitles.styles";

const ShowSubtitles = props => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log("hellooooo");

      await props.fetchSubtitles();
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <SpinnerContainer>
        {isLoading ? <FontAwesomeIcon icon={faFilm} /> : null}
      </SpinnerContainer>
      {props.subtitles && (
        <div>
          <a href={props.subtitles}> subtitle</a>
        </div>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  subtitles: state.fetchSubtitles
});
export default connect(mapStateToProps, {
  fetchSubtitles: fetchSubtitles
})(ShowSubtitles);
