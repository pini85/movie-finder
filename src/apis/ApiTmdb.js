const ApiKey = "3e296e6f6a1b142633468c58b584ab9b";
export const ApiTmdbQuery = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await response.json();
  return data;
};
export const ApiTmdbId = async id => {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const ApiTmdbImages = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en`
  );
  const data = await response.json();
  return data.backdrops;
};
