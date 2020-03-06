import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectedMovie } from "../../redux/actions/index";
import YouTube from "react-youtube";
import { ApiTmdbId, ApiTmdbImages, ApiTmdbTrailers } from "../../apis/ApiTmdb";
import ApiOmdb from "../../apis/apiOmdb";
import apiYts from "../../apis/apiYts";
import subtitles from "../../apis/subtitles";

const ShowMovie = props => {
  const [data, setData] = useState(null);
  const [test, setTest] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const id = props.location.state.data.id;
      const tmdbData = await ApiTmdbId(id);
      const omdbData = await ApiOmdb(tmdbData.imdb_id);
      const trailers = await ApiTmdbTrailers(id);
      const images = await ApiTmdbImages(id);
      const torrentData = await apiYts(tmdbData.imdb_id);

      let torrents;
      if (!torrentData) {
        torrents = [];
      } else {
        torrents = torrentData.map(torrent => {
          const obj = {
            url: torrent.url,
            quality: torrent.quality,
            type: torrent.type,
            seeds: torrent.seeds,
            peers: torrent.peers,
            size: torrent.size
          };
          return obj;
        });
      }
      const subtitle = await subtitles(tmdbData.imdb_id);
      // console.log(omdbData, tmdbData);

      const item = {
        title: omdbData.Title,
        year: omdbData.Year,
        ratings: omdbData.Ratings,
        genre: omdbData.Genre,
        director: omdbData.Director,
        writer: omdbData.Writer,
        actors: omdbData.Actors,
        runTime: tmdbData.runtime,
        plot: tmdbData.overview,
        plot2: omdbData.Plot,
        tagLine: tmdbData.tagline,
        language: omdbData.Langauge,
        images: images,
        trailers: trailers.results,
        torrents: torrents,
        subtitle: subtitle
      };
      // setData(item);
      props.selectedMovie(item);

      //`
    };
    fetchData();
  }, []);

  const optsYouTube = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0
    }
  };
  // const _onReadyYouTube = event => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  const ratings = () => {
    return (
      <div>
        {props.movie.ratings.map(item => {
          return (
            <div>
              <div>
                {item.Source}: {item.Value}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const images = () => {
    return (
      <div>
        {props.movie.images.map(image => {
          return (
            <div>
              <img
                src={`http://image.tmdb.org/t/p/w185//${image.file_path}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {props.movie ? (
        <div>
          <h3>{props.movie.title}</h3>
          {ratings()}
          <div>Year: {props.movie.year}</div>
          <div>Genre: {props.movie.genre}</div>
          <div>Actors: {props.movie.actors}</div>
          {images()}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
            {props.movie.trailers.map(trailer => {
              return (
                <>
                  <YouTube
                    videoId={trailer.key}
                    opts={optsYouTube}
                    // onReady={_onReadyYouTube}
                  />
                </>
              );
            })}
            {props.movie.torrents.map(torrent => {
              return (
                <div>
                  <div>
                    Url: <a href={torrent.url}>link!!!</a>
                  </div>
                  <div>seeds: {torrent.seeds}</div>
                  <div>peers: {torrent.peers}</div>
                  <div>size:{torrent.size}</div>
                  <div>type:{torrent.type}</div>
                </div>
              );
            })}

            {props.movie.subtitle ? (
              <div>
                <a href={props.movie.subtitle}> subtitle</a>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return { movie: state.selectedMovie };
};
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie
})(ShowMovie);
