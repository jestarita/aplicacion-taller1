import http from "../http-common";

const getGenres = () => {
  return http.get("/genres");
};

export default {getGenres}