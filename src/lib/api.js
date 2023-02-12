import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmJlMmQyODljMDc5NmRhMWQwOWE4NmY5NWZmMTZhMiIsInN1YiI6IjYzZTcxN2MxNmM4NDkyMDA3ZDI1OTI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-mnQuzTSP72Xa489PP-O4Ow4NNPXlubJTEr9-yX6UeE",
  },
});

export async function getMovies(params) {
  const response = await API.get("/search/movie", { params: params }).then(
    (res) => res
  );

  return response;
}

export async function getMovieDetail(id) {
  const response = await API.get(`/movie/${id}`).then((res) => res);

  return response;
}

export async function getTrendingMovies() {
  const response = await API.get(`/trending/movie/week`).then((res) => res);

  return response;
}
