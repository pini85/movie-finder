import shuffle from "lodash/shuffle";
import { dateMonthsBack } from "../utlis/date";
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
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&region=US&sort_by=primary_release_date.desc&sort_by=vote_count.desc&release_date.gte=${dateMonthsBack(
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

export const tmdbAdvancedMoviesApi = async ({
  fromYear,
  toYear,
  rating,
  voteCount,
  genres,
  runTime,
  actors,
  directors,
  writers,
}) => {
  console.log(runTime);

  const editRunTime = () => {
    switch (runTime) {
      case 60:
        return "with_runtime.lte=90";
      case 90:
        return "with_runtime.gte=90&with_runtime.lte=120";
      case 120:
        return "with_runtime.gte=120&with_runtime.lte=180";
      case 180:
        return "with_runtime.gte=180";
      default:
        return "";
    }
  };
  console.log(editRunTime());

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=${fromYear}&primary_release_date.lte=${toYear}&${editRunTime()}`
  );
  const data = await response.json();

  console.log(data.results);
};
