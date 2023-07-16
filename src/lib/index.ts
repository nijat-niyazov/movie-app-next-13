import { fetchData } from '@/services';

export const getTopRatedMovies = async () => fetchData('movie/top_rated');

export const getPopularMovies = async () => fetchData('movie/popular');

export const getGenredMovies = async (genre: string) =>
  fetchData('discover/movie', 'with_genres=' + genre);

export const getGenres = async () => fetchData('genre/movie/list');

export const getMovie = async (movieId: string) =>
  fetchData('movie/' + movieId);

// export const API_URL = 'https://api.themoviedb.org/3/';
// export const token = process.env.ACCESS_TOKEN;

// const options = {
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer ' + token,
//     // 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM0MTU2ZjNlM2VmM2RlNTY3YmI5ZWZhYjI5ZDlkYSIsInN1YiI6IjY0YWMzYzJmM2UyZWM4MDBjYmNlZmE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0mpaUWM3IoGEC9QY0K8JHJopHevgtsWLviDjOmKy2uw',
//   },
// };
// export const getTopRatedMovies = async () => {
//   const res = await fetch(API_URL + 'movie/top_rated', options);
//   return res.json();
// };

// export const getPopularMovies = async () => {
//   const res = await fetch(API_URL + 'movie/popular', options);
//   return res.json();
// };

// export const getGenredMovies = async (genre: string) => {
//   const res = await fetch(API_URL + 'discover/movie', options);
//   return res.json();
// };

// export const getGenres = async () => {
//   const res = await fetch(API_URL + 'genre/movie/list', options);
//   return res.json();
// };

// export const getMovie = async (movieId: string) => {
//   const res = await fetch(API_URL + 'movie/' + movieId, options);
//   return res.json();
// };
