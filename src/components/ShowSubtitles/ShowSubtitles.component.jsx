import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSubtitles } from "../../redux/actions";

const ShowSubtitles = props => {
  useEffect(() => {
    const fetchData = async () => {
      await props.fetchSubtitles();
    };
    fetchData();
  });
  return (
    props.subtitles && (
      <div>
        {" "}
        <a href={props.subtitles}> subtitle</a>
      </div>
    )
  );
};
const mapStateToProps = state => ({
  subtitles: state.fetchSubtitles
});
export default connect(mapStateToProps, {
  fetchSubtitles: fetchSubtitles
})(ShowSubtitles);
