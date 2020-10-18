const API_KEY="dd364cb17a2c5be8340d9b37eb386d76";
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumantries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests;