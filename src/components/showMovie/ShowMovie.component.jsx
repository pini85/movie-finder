import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectedMovie } from "../../redux/actions/index";
import YouTube from "react-youtube";
import { ApiTmdbId, ApiTmdbImages, ApiTmdbTrailers } from "../../apis/ApiTmdb";
import ApiOmdb from "../../apis/apiOmdb";
import apiYts from "../../apis/apiYts";

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

      const OS = require("opensubtitles-api");
      const OpenSubtitles = new OS({
        useragent: "emporaryUserAgent",
        username: "pini85",
        password: "memory00",
        ssl: true
      });

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
        torrents: torrents
      };
      // setData(item);
      props.selectedMovie(item);

      //
    };
    fetchData();
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0
    }
  };

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
  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
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
      {console.log(test)}
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
                    opts={opts}
                    onReady={_onReady}
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
                  seeds: {torrent.seeds}
                </div>
              );
            })}
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
