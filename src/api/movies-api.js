const FETCH_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '687f60735406ee0172c31461de2476ff';

export function fetchPopularMovies() {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return fetch(`${FETCH_URL}trending/movie/day?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchSearchMovies(query) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query,
    language: 'en-US',
  });
  return fetch(`${FETCH_URL}search/movie?${searchParams}`).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export function fetchMoviesDetails(movieId) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return fetch(`${FETCH_URL}movie/${movieId}?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchMoviesCredits(movieId) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return fetch(`${FETCH_URL}movie/${movieId}/credits?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchMoviesReviews(movieId) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  });
  return fetch(`${FETCH_URL}movie/${movieId}/reviews?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}
