import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import PirateBay from "thepiratebay";
import { ApiTmdbId, ApiTmdbImages, ApiTmdbTrailers } from "../../apis/ApiTmdb";
import ApiOmdb from "../../apis/apiOmdb";

const ShowMovie = props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const id = props.location.state.data.id;
      const tmdbData = await ApiTmdbId(id);
      const omdbData = await ApiOmdb(tmdbData.imdb_id);
      const trailers = await ApiTmdbTrailers(id);
      const images = await ApiTmdbImages(id);

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
        langauge: omdbData.Langauge,
        images: images,
        trailers: trailers.results
      };
      setData(item);

      // console.log("Tmdb", tmdbData, "Omdb", omdbData);
    };
    fetchData();
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  const search = async () => {
    const searchResults = await PirateBay.search("harry potter", {
      category: "video",
      page: 3,
      orderBy: "seeds",
      sortBy: "desc"
    });
  };
  search();

  const ratings = () => {
    return (
      <div>
        {data.ratings.map(item => {
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
        {data.images.map(image => {
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
      {data ? (
        <div>
          <h3>{data.title}</h3>
          {ratings()}
          <div>Year: {data.year}</div>
          <div>Genre: {data.genre}</div>
          <div>Actors: {data.actors}</div>
          {images()}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
            {data.trailers.map(trailer => {
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
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShowMovie;
