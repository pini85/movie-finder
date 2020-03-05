const apiYts = async id => {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${id}`
  );

  const data = await response.json();
  console.log(data);

  if (data.data.movie_count === 0) {
    return false;
  } else {
    const torrents = data.data.movies[0].torrents;
    return torrents;
  }
};
export default apiYts;
