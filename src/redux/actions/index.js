import {
  tmdbQueryApi,
  tmdbApiPopular,
  tmdbIdApi,
  tmdbNewestTodayApi,
  tmdbMovieSliderApi,
  tmdbHighestRatedApi,
  tmdbTrailersApi
} from "../../apis/tmdbApi";
import omdbApi from "../../apis/omdbApi";
import torrentApi from "../../apis/torrentApi";
import subtitlesApi from "../../apis/subtitlesApi";
import magnet from "../../apis/magnet";
import * as Vibrant from "node-vibrant";
export const selectedMovie = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};
export const selectedMovieId = id => {
  return {
    type: "MOVIE_ID_SELECTED",
    payload: id
  };
};
export const selectedMovies = movies => {
  return {
    type: "MOVIES_SELECTED",
    payload: movies
  };
};
export const movieSuggestions = movies => {
  return {
    type: "MOVIE_SUGGESTIONS",
    payload: movies
  };
};
export const fetchMovies = page => async (dispatch, getState) => {
  const state = getState();
  if (state.search.length > 0) {
    const response = await tmdbQueryApi(page, state.search);

    dispatch({ type: "FETCH_MOVIES", payload: response });
  }
};

export const fetchNewestMovies = page => async (dispatch, getState) => {
  const response = await tmdbNewestTodayApi(page);

  dispatch({ type: "FETCH_NEWEST_MOVIES", payload: response });
};

export const search = query => {
  return {
    type: "SEARCH_QUERY",
    payload: query
  };
};

export const fetchMovieSlider = () => async dispatch => {
  const popularMoviesData = [];

  const data = await tmdbMovieSliderApi();

  for (let i = 0; i < data.length; i++) {
    const x = await tmdbIdApi(data[i].id);
    popularMoviesData.push(x);
  }

  if (popularMoviesData.length === 3) {
    dispatch({ type: "FETCH_MOVIE_SLIDER", payload: popularMoviesData });
  }
};

export const fetchHighestRatedMovies = page => async dispatch => {
  const data = await tmdbHighestRatedApi(page);

  dispatch({ type: "FETCH_HIGHEST_RATED_MOVIES", payload: data });
};

export const displayMovie = page => async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const tmdbData = await tmdbIdApi(id);
  const omdbData = await omdbApi(tmdbData.imdb_id);
  const trailers = await tmdbTrailersApi(id);
  const subtitle = await subtitlesApi(tmdbData.imdb_id);
  const torrentData = await torrentApi(tmdbData.imdb_id);
  console.log(tmdbData);

  const imageTarget = () => {
    return `http://image.tmdb.org/t/p/w185//${tmdbData.backdrop_path}`;
  };
  const result = await Vibrant.from(imageTarget());
  const palette = await result.getPalette();
  const vibrant = await palette.Vibrant.hex;
  const darkVibrant = await palette.DarkVibrant.hex;
  const lightVibrant = await palette.LightVibrant.hex;
  const muted = await palette.Muted.hex;
  const darkMuted = await palette.DarkMuted.hex;
  const lightMuted = await palette.LightMuted.hex;

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
    poster: tmdbData.poster_path,
    backdrop: tmdbData.backdrop_path,
    trailers: trailers,
    torrents: torrents,
    subtitle: subtitle,
    magnets: magnets,
    colors: [vibrant, darkVibrant, lightVibrant, muted, darkMuted, lightMuted]
  };

  console.log(item);

  dispatch({ type: "DISPLAY_MOVIE", payload: item });
};

export const fetchTrailers = () => async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const trailers = await tmdbTrailersApi(id);
  console.log("action", trailers);

  dispatch({ type: "FETCH_TRAILERS", payload: trailers });
};
export const optionActive = e => {
  return {
    type: "OPTION_ACTIVE",
    payload: e.target.getAttribute("data-type")
  };
};

// const popularMoviesData = [];
//       const data = await tmdbApi();
//       Promise.all(
//         data.map(async item => {
//           const movies = await tmdbIdApi(item.id);

//           popularMoviesData.push(movies);
//         })
//       );
//       props.popularMovies(popularMoviesData);
//     };

export const isSending = bool => {
  return {
    type: "IS_SENDING",
    payload: bool
  };
};

export const currentPage = page => {
  return {
    type: "CURRENT_PAGE",
    payload: page
  };
};
