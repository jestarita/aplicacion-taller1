import http from "../http-common";

const getMovies = () => {
  return http.get("/movies");
};


const getGenres = () =>{
  return http.get("/genres")
}

export default {getMovies, getGenres}