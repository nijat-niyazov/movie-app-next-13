import { MovieDetails } from '@/components';
import { FC } from 'react';

const MovieContainer: FC<{ movie: MovieProps }> = ({ movie }) => {
  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieContainer;
