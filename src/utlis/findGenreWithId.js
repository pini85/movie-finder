const findGenreWithId = (genres, id) => {
  const genre = genres.filter((genre) => {
    return genre.id === parseInt(id);
  });

  return genre[0].name;
};

export default findGenreWithId;
