import { MovieContainer } from '@/containers';
import { getMovie } from '@/lib';
import { notFound } from 'next/navigation';

const MoviePage = async ({
  params: { movieId },
  searchParams,
}: {
  params: { movieId: number };
  searchParams: any;
}) => {
  const movie = await getMovie(`${movieId}`);

  if (!movie) {
    notFound();
  }

  if (searchParams?.error === 'true') {
    throw new Error('Error Happened');
  }

  return (
    <div>
      <MovieContainer movie={movie} />
    </div>
  );
};

export default MoviePage;
