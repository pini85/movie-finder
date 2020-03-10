import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectedMovie } from "../../redux/actions/index";
import YouTube from "react-youtube";
import { tmdbIdApi, tmdbImagesApi, tmdbTrailersApi } from "../../apis/tmdbApi";
import omdbApi from "../../apis/omdbApi";
import torrentApi from "../../apis/torrentApi";
import subtitlesApi from "../../apis/subtitlesApi";

const ShowMovie = props => {
  console.log("show movie", props.movie.id);

  useEffect(() => {
    const fetchData = async () => {
      const id = props.movie.id;
      const tmdbData = await tmdbIdApi(id);
      console.log("hi", tmdbData);

      const omdbData = await omdbApi(tmdbData.imdb_id);
      const trailers = await tmdbTrailersApi(id);
      const images = await tmdbImagesApi(id);
      console.log(images);

      const torrentData = await torrentApi(tmdbData.imdb_id);

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
      const subtitle = await subtitlesApi(tmdbData.imdb_id);
      console.log("omdbData", omdbData, "tmdbData", tmdbData);

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
        tagLine: tmdbData.tagline,
        language: omdbData.Language,
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
        {props.movie.ratings
          ? props.movie.ratings.map(item => {
              return (
                <div>
                  <div>
                    {item.Source}: {item.Value}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  const images = () => {
    return (
      <div>
        {props.movie.images &&
          props.movie.images.map(image => {
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

  const trailers = () => {
    return (
      props.movie.trailers &&
      props.movie.trailers.map(trailer => {
        return (
          <>
            <YouTube
              videoId={trailer.key}
              opts={optsYouTube}
              // onReady={_onReadyYouTube}
            />
          </>
        );
      })
    );
  };

  const torrents = () => {
    return (
      props.movie.torrents &&
      props.movie.torrents.map(torrent => {
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
      })
    );
  };

  const subtitle = () => {
    return props.movie.subtitle && props.movie.subtitle ? (
      <div>
        <a href={props.movie.subtitle}> subtitle</a>
      </div>
    ) : null;
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
          <div>Director: {props.movie.director}</div>
          <div>Writer: {props.movie.writer}</div>
          <div>Runtime: {props.movie.runTime}</div>
          <div>plot: {props.movie.plot}</div>
          <div>tagline: {props.movie.tagLine}</div>
          <div>language: {props.movie.language}</div>
          {images()}
          {trailers()}
          {torrents()}
          {subtitle()}
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
