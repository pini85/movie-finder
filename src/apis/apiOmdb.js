const ApiOmdb = async imdbId => {
  const apiKey = "c9f0874f";
  const response = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`
  );
  const data = await response.json();
  return data;
};

// const ApiOmdb = async searchQuery => {
//   const apiKey = "c9f0874f";
//   const response = await fetch(
//     `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
//   );
//   const data = await response.json();
//   return data;
// };

export default ApiOmdb;
