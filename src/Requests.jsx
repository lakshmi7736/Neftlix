 const apiBaseUrl='https://api.themoviedb.org/3';
 const key="ce1b9c94e333aab49a237c8443f95097";

const requests = {
  requestPopular: `${apiBaseUrl}/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${apiBaseUrl}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${apiBaseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `${apiBaseUrl}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestHorror: `  ${apiBaseUrl}/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,

};

  export default requests