import {
  tmdbQueryApi,
  tmdbApiPopular,
  tmdbIdApi,
  tmdbNewestTodayApi,
  tmdbMovieSliderApi,
  tmdbHighestRatedApi,
  tmdbTrailersApi,
  tmdbActorsApi,
  tmdbMovieCreditsApi,
  tmdbGenresApi,
  tmdbAdvancedMoviesApi,
  tmdbCastId,
  tmdbCastInfoApi,
  tmdbCastMoviesApi,
  tmdbMovieReviewsApi,
} from "../../apis/tmdbApi";
import omdbApi from "../../apis/omdbApi";
import torrentApi from "../../apis/torrentApi";
import subtitlesApi from "../../apis/subtitlesApi";
import { fetchComedianActors } from "../../scraper/imdb";
import magnet from "../../apis/magnet";
import * as Vibrant from "node-vibrant";

export const displayPage = (page) => {
  return {
    type: "DISPLAY_PAGE",
    payload: page,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};
export const selectedMovieId = (id) => {
  return {
    type: "MOVIE_ID_SELECTED",
    payload: id,
  };
};
export const selectedMovies = (movies) => {
  return {
    type: "MOVIES_SELECTED",
    payload: movies,
  };
};
export const movieSuggestions = (movies) => {
  return {
    type: "MOVIE_SUGGESTIONS",
    payload: movies,
  };
};
export const fetchMovies = (page) => async (dispatch, getState) => {
  const state = getState();
  if (state.search.length > 0) {
    const response = await tmdbQueryApi(page, state.search);

    dispatch({ type: "FETCH_MOVIES", payload: response });
  }
};

export const fetchNewestMovies = (page) => async (dispatch, getState) => {
  const response = await tmdbNewestTodayApi(page);

  dispatch({ type: "FETCH_NEWEST_MOVIES", payload: response });
};

export const search = (query) => {
  return {
    type: "SEARCH_QUERY",
    payload: query,
  };
};

export const fetchMovieSlider = () => async (dispatch) => {
  const data = await tmdbMovieSliderApi();
  const popularMoviesData = await Promise.all(
    data.map((movie) => tmdbIdApi(movie.id))
  );

  dispatch({ type: "FETCH_MOVIE_SLIDER", payload: popularMoviesData });
};

export const fetchHighestRatedMovies = (page) => async (dispatch) => {
  const data = await tmdbHighestRatedApi(page);

  dispatch({ type: "FETCH_HIGHEST_RATED_MOVIES", payload: data });
};

export const goToMovie = (id) => (dispatch, getState) => {
  dispatch(selectedMovieId(id));
  return dispatch(fetchMovie);
};

const fetchMovie = async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const tmdbData = await tmdbIdApi(id);

  const omdbData = await omdbApi(tmdbData.imdb_id);
  const torrentData = await torrentApi(tmdbData.imdb_id);
  const movieCredits = await tmdbMovieCreditsApi(id);
  const reviews = await tmdbMovieReviewsApi(id);

  // export const fetchMovieSlider = () => async dispatch => {
  //   const data = await tmdbMovieSliderApi();
  //   const popularMoviesData = await Promise.all(
  //     data.map(movie => tmdbIdApi(movie.id))
  //   );

  const actorsList = async () => {
    const actors = omdbData.Actors.trim().split(",");
    const fetchActors = await Promise.all(
      actors.map(async (actor) => await tmdbActorsApi(actor))
    );

    const x = fetchActors.map((page) => {
      return page.results.slice(0, 1).map((actor) => {
        return {
          name: actor.name,
          profile: actor.profile_path,
        };
      });
    });
    return x;
  };

  const imageTarget = () => {
    return tmdbData.backdrop_path
      ? `http://image.tmdb.org/t/p/w185//${tmdbData.backdrop_path}`
      : "https://upload.wikimedia.org/wikipedia/commons/c/c0/White_color_Page.jpg";
  };
  const result = Vibrant.from(imageTarget());
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
    torrents = torrentData.map((torrent) => {
      const obj = {
        url: torrent.url,
        quality: torrent.quality,
        type: torrent.type,
        seeds: torrent.seeds,
        peers: torrent.peers,
        size: torrent.size,
      };
      return obj;
    });
    magnets = torrentData.map((torrent) => {
      return magnet(omdbData.Title, torrent.hash, torrent.url);
    });
  }

  const ratings = () => {
    switch (omdbData.Ratings.length) {
      case 1:
        return [
          {
            imdb: omdbData.Ratings[0],
            img: "https://i.ibb.co/dth8xgq/imdb.png",
          },
        ];

      case 2:
        return [
          {
            rating: omdbData.Ratings[0],
            img: "https://i.ibb.co/dth8xgq/imdb.png",
          },
          {
            rating: omdbData.Ratings[1],
            img: "https://i.ibb.co/BCy3STv/tomato.png",
          },
        ];
      case 3:
        return [
          {
            rating: omdbData.Ratings[0],
            img: "https://i.ibb.co/dth8xgq/imdb.png",
          },
          {
            rating: omdbData.Ratings[1],
            img: "https://i.ibb.co/BCy3STv/tomato.png",
          },
          {
            rating: omdbData.Ratings[2],
            img: "https://i.ibb.co/5jVT2rK/meta-critic.png",
          },
        ];
    }
  };

  const item = {
    title: omdbData.Title,
    year: omdbData.Year,
    tmdbRating: tmdbData.vote_average,
    ratings: ratings(),
    genre: omdbData.Genre,
    director: omdbData.Director,
    writer: omdbData.Writer,
    actors: await actorsList(),
    cast: movieCredits.cast,
    runTime: tmdbData.runtime,
    reviews: reviews,
    magnets: magnets,
    plot: tmdbData.overview,
    tagLine: tmdbData.tagline,
    language: omdbData.Language,
    poster: tmdbData.poster_path,
    backdrop: tmdbData.backdrop_path,
    colors: {
      vibrant: vibrant,
      darkVibrant: darkVibrant,
      lightVibrant: lightVibrant,
      muted: muted,
      darkMuted: darkMuted,
      lightMuted: lightMuted,
    },
  };

  // ACTION2: FETCH_MOVIE ===> movie ==> state.movie = movie
  dispatch({ type: "DISPLAY_MOVIE", payload: item });
};

export const fetchTrailers = () => async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const trailers = await tmdbTrailersApi(id);

  dispatch({ type: "FETCH_TRAILERS", payload: trailers });
};

export const fetchTorrents = () => async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const tmdbData = await tmdbIdApi(id);
  const torrents = await torrentApi(tmdbData.imdb_id);

  dispatch({ type: "FETCH_TORRENTS", payload: torrents });
};

export const fetchSubtitles = () => async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const tmdbData = await tmdbIdApi(id);
  const subtitle = await subtitlesApi(tmdbData.imdb_id);

  dispatch({ type: "FETCH_SUBTITLES", payload: subtitle });
};

export const fetchMagnets = () => async (dispatch, getState) => {
  const id = getState().selectedMovieId;
  const tmdbData = await tmdbIdApi(id);

  const torrentData = await torrentApi(tmdbData.imdb_id);

  const magnets = torrentData.map((torrent) => {
    return magnet(tmdbData.Title, torrent.hash, torrent.url);
  });

  dispatch({ type: "FETCH_MAGNETS", payload: magnets });
};

export const fetchGenres = () => async (dispatch) => {
  const genres = await tmdbGenresApi();

  dispatch({ type: "FETCH_GENRES", payload: genres });
};

export const optionActive = (e) => {
  return {
    type: "OPTION_ACTIVE",
    payload: parseInt(e.target.getAttribute("data-type")),
  };
};

export const createAdvancedSearch = (obj) => {
  return {
    type: "CREATE_ADVANCED_SEARCH",
    payload: obj,
  };
};

export const fetchAdvancedSearch = (page) => async (dispatch, getState) => {
  const search = getState().advancedSearch;
  const savedSearch = getState().displayUserAdvancedSearch;
  console.log("inside fetchCast", savedSearch);

  let actorsArray = [];
  let directorsArray = [];
  let writersArray = [];
  const fetchCastIds = async (castType, arrayType) => {
    console.log("castType", castType);

    const fetch = await Promise.all(
      castType.values.map(async (cast) => {
        const castDetails = await tmdbCastId(cast);

        return castDetails.results[0].id;
      })
    );

    return arrayType.push({ values: fetch, option: castType.option });
  };

  // await fetchCastIds(
  //   savedSearch ? savedSearch.search.actors[0] : search.actorsArray,
  //   actorsArray
  // );
  await fetchCastIds(
    savedSearch ? savedSearch.search.actors : search.actorsArray,
    actorsArray
  );

  await fetchCastIds(
    savedSearch && savedSearch.active
      ? savedSearch.search.directors[0]
      : search.directorsArray,
    directorsArray
  );
  await fetchCastIds(
    savedSearch && savedSearch.active
      ? savedSearch.search.writers[0]
      : search.writersArray,
    writersArray
  );

  const obj = {
    page: page,
    fromYear: savedSearch ? savedSearch.search.fromYear : search.fromYear,
    toYear: savedSearch ? savedSearch.search.toYear : search.toYear,
    sortBy: savedSearch ? savedSearch.search.sortBy : search.sortBy,
    rating: savedSearch ? savedSearch.search.rating : search.rating,
    votes: savedSearch ? savedSearch.search.voteCount : search.voteCount,
    genres: savedSearch ? savedSearch.search.genres : search.genres,
    runTime: savedSearch ? savedSearch.search.runTime : search.runTime,
    actors: actorsArray[0],
    directors: directorsArray[0],
    writers: writersArray[0],
    actorsOption: actorsArray,
  };

  const movies = await tmdbAdvancedMoviesApi(obj);

  dispatch({ type: "FETCH_ADVANCED_MOVIES", payload: movies });
};

export const fetchCastSuggestion = (type, query) => async (dispatch) => {
  let fetchIds;
  let ids;
  let idsType;
  if (query.length > 0) {
    fetchIds = await tmdbCastId(query);
    ids = fetchIds.results;
  }

  if (ids) {
    idsType = ids.filter((cast) => {
      return type === cast.known_for_department;
    });

    const castSuggestions = await Promise.all(
      idsType.map((cast) => tmdbCastInfoApi(cast.id))
    );
    dispatch({ type: "FETCH_CAST_SUGGESTIONS", payload: castSuggestions });
  } else {
    dispatch({ type: "FETCH_CAST_SUGGESTIONS", payload: query });
  }
};

export const saveUserAdvancedSearch = (obj) => (dispatch) => {
  dispatch({ type: "SAVE_ADVANCED_SEARCH", payload: obj });
};

export const removeUserAdvancedSearch = (obj) => {
  return {
    type: "REMOVE_ADVANCED_SEARCH",
    payload: obj,
  };
};

export const displayUserSearch = (search) => {
  return {
    type: "DISPLAY_SAVED_SEARCH",
    payload: search,
  };
};

export const defaultSearches = () => async (dispatch) => {
  const comedyActors = await fetchComedianActors();

  const defaultSearches = [
    {
      search: {
        name: "Hilarious Comedies",
        fromYear: "1985-01-01",
        toYear: "",
        sortBy: "vote-average",
        rating: 5,
        voteCount: 100,
        runTime: 90,
        genres: "35",
        actors: { option: "or", values: comedyActors },
        directors: { option: "or", values: [] },
        writers: { option: "or", values: [] },
      },
    },
    {
      search: {
        name: "Action Movies",
        fromYear: "2019",
        toYear: "2019",
        rating: 1,
        voteCount: 15000,
        runTime: 60,
        genres: "Action",
        actors: { option: "or", values: ["yo", "hi"] },
        directors: { option: "or", values: [] },
        writers: { option: "or", values: [] },
      },
    },
    {
      search: {
        name: "Rare Movies",
        fromYear: "2019",
        toYear: "2019",
        rating: 7,
        voteCount: 15000,
        runTime: 90,
        genres: "Horror",
        actors: { option: "or", values: ["yo", "hi"] },
        directors: { option: "or", values: [] },
        writers: { option: "or", values: [] },
      },
    },
  ];
  console.log("insideDefaultSearchs", defaultSearches[0]);

  return dispatch({
    type: "DEFAULT_ADVANCED_SEARCH",
    payload: defaultSearches,
  });
};

export const fetchActorMovies = (name, page) => async (dispatch) => {
  if (name.length < 0) {
    return;
  }
  const fetchId = await tmdbCastId(name);
  const id = fetchId.results[0].id;

  const movies = await tmdbCastMoviesApi(id, page);

  dispatch({ type: "FETCH_ACTOR_MOVIES", payload: movies });
};

export const createPopularActors = (actors) => {
  return {
    type: "CREATE_POPULAR_ACTORS",
    payload: actors,
  };
};
export const fetchPopularActors = (page) => async (dispatch, getState) => {
  const actorsObj = getState().createPopularActors;
  const actors = {};
  actors.total_results = actorsObj.total_results;
  actors.total_pages = actorsObj.total_pages;
  actors.results = [];

  await Promise.all(
    actorsObj[page].map(async (cast) => {
      const actorDetails = await tmdbCastId(cast);
      actors.results.push(actorDetails.results[0]);
    })
  );

  dispatch({ type: "FETCH_POPULAR_ACTORS", payload: actors });
};

export const isSending = (bool) => {
  return {
    type: "IS_SENDING",
    payload: bool,
  };
};
