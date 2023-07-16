import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const SingleMovie: FC<{ movie: MovieProps }> = ({ movie }) => {
  return (
    <div className="overflow-hidden h-[350px] w-[230px] rounded-lg relative transition-all hover:z-10 hover:scale-125">
      <Link href={'/movie/' + movie.id}>
        <Image
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          fill
          unoptimized
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default SingleMovie;
