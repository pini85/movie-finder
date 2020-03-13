const ApiKey = "3e296e6f6a1b142633468c58b584ab9b";

export const tmdbApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&total_results=1&page=1`
  );
  const data = await response.json();
  return data.results.slice(0, 5);
};
export const tmdbQueryApi = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await response.json();
  return data;
};
export const tmdbIdApi = async id => {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const tmdbImagesApi = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en`
  );
  const data = await response.json();

  if (data.backdrops.length < 4) {
    if (data.posters.length > 8) {
      return data.posters.splice(0, 6);
    } else {
      return data.posters;
    }
  } else {
    return data.backdrops;
  }
};

export const tmdbTrailersApi = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en-US`
  );
  const data = await response.json();
  return data;
};
