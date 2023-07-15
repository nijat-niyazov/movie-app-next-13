import { MovieDetails } from '@/components';
import { FC } from 'react';

const MovieContainer: FC<{ result: MovieProps }> = ({ result }) => {
  return (
    <div>
      <MovieDetails movie={result} />
    </div>
  );
};

export default MovieContainer;
