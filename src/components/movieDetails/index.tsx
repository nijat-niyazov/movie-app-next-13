import Image from 'next/image';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const MovieDetails: React.FC<{ movie: MovieProps }> = async ({ movie }) => {
  const { original_title: title, overview, id, backdrop_path: img } = movie;

  return (
    <div className="flex flex-col gap-6 my-14 ">
      <h1 className="text-6xl uppercase tracking-tight font-extrabold  ">
        {title}
      </h1>
      <span>{overview}</span>

      <div className="flex gap-4">
        <Link
          className="flex items-center justify-center w-[300px] rounded-full text-md font-extrabold bg-white text-black"
          href={'movie/' + id}
        >
          Play
        </Link>

        <button className="flex rounded-full items-center justify-center border-2 border-white w-16 h-16 font-extrabold text-md text-white">
          <FaPlus />
        </button>
      </div>

      <div className="absolute inset-0 -z-10">
        <Image
          className="z-0 object-cover brightness-50"
          src={'https://image.tmdb.org/t/p/original/' + img}
          alt="movie"
          fill
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MovieDetails;
