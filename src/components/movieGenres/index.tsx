import Link from 'next/link';
import { FC } from 'react';

type Props = {
  genres: {
    id: number;
    name: string;
  }[];
};

const MovieGenres: FC<Props> = ({ genres }) => {
  return (
    <div className="flex justify-around flex-wrap m-auto gap-2">
      {genres.map(genre => {
        return (
          <Link
            className="bg-black border-[1px] border-gray-600 rounded-full px-10 py-3"
            key={genre.id}
            href={'/' + genre.id}
          >
            <span>{genre.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieGenres;
