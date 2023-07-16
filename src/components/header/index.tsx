import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between p-6 items-center text-2xl uppercase">
        <Link
          href="/"
          className="flex gap-2 items-center tracking-wider  font-bold  "
        >
          <FaPlayCircle />
          <h1 className="uppercase">netfilms</h1>
        </Link>

        <div className="flex gap-4">
          <Link
            className=" hover:text-amber-400 hover:underline underline-offset-8"
            href={'/movies'}
          >
            Movies
          </Link>
          <Link
            className=" hover:text-amber-400 hover:underline underline-offset-8"
            href={'/series'}
          >
            Series
          </Link>
          <Link
            className=" hover:text-amber-400 hover:underline underline-offset-8"
            href={'/kids'}
          >
            Kids
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
