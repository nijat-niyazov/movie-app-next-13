import { HomeContainer } from '@/containers';
import genres from '@/mocks/genres.json';
import movies from '@/mocks/movies.json';

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

const Category = ({
  params: { category },
}: {
  params: { category: string[] };
}) => {
  const exist = category?.length > 0;

  return (
    <main className="p-10">
      <HomeContainer
        selectedCategory={{
          id: exist ? category?.[0] : '',
          movies: exist ? movies.results.slice(15, 25) : [],
        }}
      />
    </main>
  );
};

export default Category;
