const FETCH_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '687f60735406ee0172c31461de2476ff';
const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
});

export function fetchPopularMovies() {
  return fetch(`${FETCH_URL}trending/movie/day?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchSearchMovies(query) {
  const searchParamsSearchMovies = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    query,
  });
  return fetch(`${FETCH_URL}search/movie?${searchParamsSearchMovies}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchMoviesDetails(movieId) {
  return fetch(`${FETCH_URL}movie/${movieId}?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchMoviesCredits(movieId) {
  return fetch(`${FETCH_URL}movie/${movieId}/credits?${searchParams}`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function fetchMoviesReviews(movieId) {
  const searchParamsReviews = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  });
  return fetch(
    `${FETCH_URL}movie/${movieId}/reviews?${searchParamsReviews}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}
