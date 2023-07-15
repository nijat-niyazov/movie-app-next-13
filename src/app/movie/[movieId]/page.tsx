import { MovieContainer } from '@/containers';
import allMovies from '@/mocks/movies.json';
import { notFound } from 'next/navigation';

const delay = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms * 1000));

const MoviePage = async ({
  params: { movieId },
  searchParams,
}: {
  params: { movieId: number };
  searchParams: any;
}) => {
  const result = allMovies.results.find(movie => movie.id === Number(movieId));

  await delay(100);

  if (!result) {
    notFound();
  }

  if (searchParams?.error === 'true') {
    throw new Error('Error Happened');
  }

  return (
    <div>
      <MovieContainer result={result} />
    </div>
  );
};

export default MoviePage;
