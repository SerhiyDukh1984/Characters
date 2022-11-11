// import { useState, useEffect } from 'react';
// import Searchbar from 'components/SearchBar/SearchBar';
// import { getMoviesBySearch } from 'Api/Api';
// import MovieList from '../components/MovieList/MovieList';
// import { useSearchParams } from 'react-router-dom';

// const Movies = () => {
//   const [searchMovie, setSearchMovie] = useState([]);
//   const [search, setSearch] = useSearchParams();

//   const query = search.get('query');

//   useEffect(() => {
//     if (query) {
//       getMoviesBySearch(query).then(response => {
//         setSearchMovie(response.data.results);
//       });
//     }
//   }, [query]);

//   return (
//     <>
//       <Searchbar setSearch={setSearch} />
//       {searchMovie && <MovieList films={searchMovie} />}
//     </>
//   );
// };

// export default Movies;
