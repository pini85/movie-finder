import React, { useState, useEffect } from "react";
import { ApiTmdbId, ApiTmdbImages } from "../../apis/ApiTmdb";
import ApiOmdb from "../../apis/apiOmdb";

const ShowMovie = props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const id = props.location.state.data.id;
      const tmdbData = await ApiTmdbId(id);
      const omdbData = await ApiOmdb(tmdbData.imdb_id);
      console.log();

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
        images: images
      };
      setData(item);

      console.log("Tmdb", tmdbData, "Omdb", omdbData);
    };
    fetchData();
  }, []);

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

  const images = () => {
    return (
      <div>
        {data.images.map(image => {
          console.log(image);

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
          {console.log(data.title)}
          <h3>{data.title}</h3>
          {ratings()}
          <div>Year: {data.year}</div>
          <div>Genre: {data.genre}</div>
          <div>Actors: {data.actors}</div>
          {images()}hi
        </div>
      ) : null}
    </div>
  );
};

export default ShowMovie;
