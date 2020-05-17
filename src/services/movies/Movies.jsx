import http from "../http-common";

const getMovies = () => {
  return http.get("/movies");
};

export default {getMovies}