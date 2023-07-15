import { MovieDetails, MovieGenres, Movies } from '@/components';
import Genres from '@/mocks/genres.json';
import MoviesData from '@/mocks/movies.json';

const HomeContainer = ({
  selectedCategory: { id, movies },
}: {
  selectedCategory: { id: string; movies: MovieProps[] | [] };
}) => {
  const movie = MoviesData.results[0];
  const genres = Genres.genres.slice(0, 8);
  const mockMovies = MoviesData.results;
  const genreName = genres.find(genre => genre.id === Number(id))?.name;

  return (
    <div>
      <MovieDetails movie={movie} />
      <MovieGenres genres={genres} />
      {movies.length > 0 && genreName && (
        <Movies title={genreName} movies={movies} />
      )}

      <Movies title={'Popular Films'} movies={mockMovies.slice(0, 5)} />
      <Movies title={'Animation'} movies={mockMovies.slice(6, 11)} />
      <Movies title={'Adventure'} movies={movies.slice(11, 16)} />
    </div>
  );
};

export default HomeContainer;
