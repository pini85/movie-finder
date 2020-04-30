export const advancedSearchRunTime = (runTime) => {
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

export const advancedSearchRating = (rating) => {
  switch (rating) {
    case 9:
      return "vote_average.gte=9";
    case 8:
      return "vote_average.lte=9";
    case 7:
      return "vote_average.lte=8";
    case 6:
      return "vote_average.lte=7";
    case 5:
      return "vote_average.lte=6";
    case 4:
      return "vote_average.lte=5";
    case 3:
      return "vote_average.lte=4";
    case 2:
      return "vote_average.lte=3";
    case 1:
      return "vote_average.lte=2";
    case 0:
      return "vote_average.lte=1";
  }
};

export const advancedSearchVotes = (votes) => {
  switch (votes) {
    case 20000:
      return "vote_count.gte=20000";
    case 15000:
      return "vote_count.lte=15000";
    case 10000:
      return "vote_count.lte=10000";
    case 9000:
      return "vote_count.lte=9000";
    case 8000:
      return "vote_count.lte=8000";
    case 7000:
      return "vote_count.lte=7000";
    case 6000:
      return "vote_count.lte=6000";
    case 5000:
      return "vote_count.lte=5000";
    case 4000:
      return "vote_count.lte=4000";
    case 3000:
      return "vote_count.lte=3000";
    case 2000:
      return "vote_count.lte=2000";
    case 1000:
      return "vote_count.lte=1000";
    case 500:
      return "vote_count.lte=500";
    case 100:
      return "vote_count.lte=100";
  }
};

export const advancedSearchGenres = (genres) => {
  switch (genres) {
    case "Action":
      return "with_genres=28";
  }
};

export const advancedSearchCast = (cast) => {
  if (cast.values.length < 1) return "";
  let string = "";
  const option = cast.option === "or" ? "||" : ",";
  if (cast.length === 1) {
    return [cast[0]];
  }
  cast.values.map((actor) => {
    if (!string) {
      string += actor;
    } else {
      string += option + actor;
    }
  });

  return string;
};
