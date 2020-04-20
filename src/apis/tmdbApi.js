import shuffle from "lodash/shuffle";
import { dateMonthsBack } from "../utlis/date";
import {
  advancedSearchRunTime,
  advancedSearchRating,
  advancedSearchVotes,
  advancedSearchGenres,
  advancedSearchCast,
} from "../utlis/advancedSearchConfiguration";
import filterMovies from "../utlis/filterMovies";
const ApiKey = "3e296e6f6a1b142633468c58b584ab9b";

export const tmdbApiDiscover = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&total_results=1&page=1`
  );
  const data = await response.json();

  return data.results.slice(0, 1);
};
export const tmdbMovieSliderApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&vote_average.gte=7&&vote_count.gte=1000&include_adult=false&include_video=false&total_results=1&page=1`
  );
  const data = await response.json();
  return data.results.slice(0, 5);

  // const shuffled = shuffle(data.results);

  // return shuffled.slice(0, 5);
};
export const tmdbQueryApi = async (page, query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await response.json();
  return data;
};
export const tmdbIdApi = async (id) => {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();

  return data;
};

// export const tmdbImagesApi = async id => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en`
//   );
//   const data = await response.json();

//   if (data.backdrops.length < 4) {
//     if (data.posters.length > 8) {
//       return data.posters.splice(0, 6);
//     } else {
//       return data.posters;
//     }
//   } else {
//     return data.backdrops;
//   }
// };

export const tmdbTrailersApi = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en-US`
  );
  const data = await response.json();

  const sliced =
    data.results.length > 3 ? data.results.slice(0, 3) : data.results;

  return sliced;
};

export const tmdbLatestApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US &release_date.gte=2019&page=1`
  );
  const data = await response.json();

  return data;
};

export const tmdbNewestTodayApi = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&region=US&&language=en-US&sort_by=primary_release_date.desc&sort_by=vote_count.desc&release_date.gte=${dateMonthsBack(
      2
    )}&release_date.lte=${dateMonthsBack(1)}&page=${page}`
  );
  const data = await response.json();

  return data;
};

export const tmdbHighestRatedApi = async (page) => {
  const response = await fetch(`
  https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=vote_count.desc&vote_average.desc&include_adult=false&include_video=false&page=${page}`);
  const data = await response.json();
  return data;
};

export const tmdbActorsApi = async (name) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  const data = await response.json();
  return data;
};

export const tmdbMovieCreditsApi = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`
  );
  const data = await response.json();

  return data;
};

export const tmdbGenresApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();

  return data.genres;
};

export const tmdbCastId = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&query=${query}`
  );
  const data = await response.json();

  return data;
};

export const tmdbCastInfoApi = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${ApiKey}&language=en-US`
  );

  const data = await response.json();
  return data;
};

export const tmdbAdvancedMoviesApi = async ({
  page,
  fromYear,
  toYear,
  rating,
  votes,
  genres,
  runTime,
  actors,
  directors,
  writers,
}) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&include_adult=false&include_video=false&sort_by=vote_count.desc&primary_release_date.gte=${fromYear}&primary_release_date.lte=${toYear}&${advancedSearchRating(
      rating
    )}&${advancedSearchVotes(
      votes
    )}&with_genres=${genres}&${advancedSearchRunTime(
      runTime
    )}&${advancedSearchRunTime(runTime)}&${advancedSearchCast(actors).map(
      (cast) => cast
    )}&${advancedSearchCast(directors).map(
      (cast) => cast
    )}&${advancedSearchCast(writers).map((cast) => cast)}&page=${page}`
  );

  const data = await response.json();

  const filtered = await filterMovies(data);
  console.log(data, filtered);

  return filtered;
};

/*
to fetch actors,directors and writers in the movie you need to do the following:
 user queries bruce willis
 https://api.themoviedb.org/3/search/person?api_key=###&query=bruce+willis

 you can then get their id which is 62
 and then query with it:
 https://api.themoviedb.org/3/discover/movie?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=62

*/
