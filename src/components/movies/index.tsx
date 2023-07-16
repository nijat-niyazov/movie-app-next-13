// 'use client';

import SingleMovie from './singleMovie';

const Movies: React.FC<{ movies: MovieProps[]; title: string }> = ({
  title,
  movies,
}) => {
  return (
    <div className="mt-9">
      <h3 className="mb-4 uppercase text-xl tracking-tight">{title}</h3>
      <div className="flex gap-10 flex-wrap">
        {movies.map(movie => (
          <SingleMovie movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
