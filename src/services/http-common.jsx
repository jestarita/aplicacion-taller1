import axios from "axios";

export default axios.create({
  baseURL: "https://api-movies-free.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});