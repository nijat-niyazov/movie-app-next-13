import { HomeContainer } from '@/containers';
import {
  getGenredMovies,
  getGenres,
  getPopularMovies,
  getTopRatedMovies,
} from '@/lib';
import genres from '@/mocks/genres.json';

type Props = {
  params: { category: string[] };
};

export async function generateMetadata({ params: { category } }: Props) {
  const finded = genres.genres.find(genre => genre.id === Number(category?.[0]))
    ?.name;

  return {
    title: finded ?? 'Home page',
  };
}

const delay = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

const Genre = async ({
  params: { genre },
}: {
  params: { genre: string[] };
}) => {
  // await delay(20000);

  const exist = genre?.length > 0;

  const [{ results: popularMovies }, { results: topRatedMovies }, { genres }] =
    await Promise.all([getTopRatedMovies(), getPopularMovies(), getGenres()]);

  let genredMovies;
  if (exist) {
    const { results } = await getGenredMovies(genre[0]);
    genredMovies = results;
  }

  return (
    <main className="p-10">
      <HomeContainer
        specialGenre={{
          id: exist ? genre?.[0] : '',
          genredMovies: exist ? genredMovies.slice(0, 5) : [],
        }}
        genres={genres}
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
      />
    </main>
  );
};

export default Genre;
