import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { selectedMovie } from "../../redux/actions/index";
import YouTube from "react-youtube";
import { tmdbIdApi, tmdbImagesApi, tmdbTrailersApi } from "../../apis/tmdbApi";
import omdbApi from "../../apis/omdbApi";
import torrentApi from "../../apis/torrentApi";
import subtitlesApi from "../../apis/subtitlesApi";
import magnet from "../../apis/magnet";

const ShowMovie = props => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const id = props.id;

      const tmdbData = await tmdbIdApi(id);
      const omdbData = await omdbApi(tmdbData.imdb_id);
      const trailers = await tmdbTrailersApi(id);
      const images = await tmdbImagesApi(id);
      const subtitle = await subtitlesApi(tmdbData.imdb_id);
      const torrentData = await torrentApi(tmdbData.imdb_id);

      let torrents;
      let magnets;
      if (!torrentData) {
        torrents = [];
        magnets = [];
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
        magnets = torrentData.map(torrent => {
          return magnet(omdbData.Title, torrent.hash, torrent.url);
        });
      }

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
        subtitle: subtitle,
        magnets: magnets
      };

      // setData(item);
      props.selectedMovie(item);
      setIsLoading(false);

      //`
    };
    fetchData();
  }, [props.id]);

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
        {props.item.ratings
          ? props.item.ratings.map(item => {
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
        {props.item.images
          ? props.item.images.map(image => {
              return (
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w185//${image.file_path}`}
                    alt=""
                  />
                </div>
              );
            })
          : null}
      </div>
    );
  };

  const trailers = () => {
    return (
      props.item.trailers &&
      props.item.trailers.map(trailer => {
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
      props.item.torrents &&
      props.item.torrents.map(torrent => {
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

  const magnets = () => {
    return (
      props.item.magnets &&
      props.item.magnets.map(magnet => {
        return (
          <div>
            <a href={magnet}>magnet</a>
          </div>
        );
      })
    );
  };

  const subtitle = () => {
    return props.item.subtitle && props.item.subtitle ? (
      <div>
        <a href={props.item.subtitle}> subtitle</a>
      </div>
    ) : null;
  };

  return (
    <div>
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <div>
          <h3>{props.item.title}</h3>
          {ratings()}
          <div>Year: {props.item.year}</div>
          <div>Genre: {props.item.genre}</div>
          <div>Actors: {props.item.actors}</div>
          <div>Director: {props.item.director}</div>
          <div>Writer: {props.item.writer}</div>
          <div>Runtime: {props.item.runTime}</div>
          <div>plot: {props.item.plot}</div>
          <div>tagline: {props.item.tagLine}</div>
          <div>language: {props.item.language}</div>
          {images()}
          {trailers()}
          {torrents()}
          {subtitle()}
          {magnets()}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.selectedMovie,
    query: state.search,
    id: state.selectedMovieId
  };
};
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie
})(ShowMovie);
