import { MovieDetails, MovieGenres, Movies } from '@/components';
import { FC } from 'react';

interface HomeContainerProps {
  specialGenre: { id: string; genredMovies: MovieProps[] | [] };
  topRatedMovies?: MovieProps[];
  popularMovies?: MovieProps[];
  genredMovies?: MovieProps[];
  genres: { id: number; name: string }[];
}

const HomeContainer: FC<HomeContainerProps> = async ({
  specialGenre: { id, genredMovies = [] },
  topRatedMovies = [],
  popularMovies = [],
  genres = [],
}) => {
  const genreName = genres.find(genre => genre.id === Number(id))?.name;

  return (
    <div>
      <MovieDetails movie={topRatedMovies?.[0]} />
      <MovieGenres genres={genres.slice(0, 8)} />

      {genredMovies.length > 0 && genreName && (
        <Movies title={genreName} movies={genredMovies} />
      )}

      <Movies title={'Top Rated Movies'} movies={topRatedMovies.slice(0, 5)} />
      <Movies title={'Popular Movies'} movies={popularMovies.slice(6, 11)} />
    </div>
  );
};

export default HomeContainer;
