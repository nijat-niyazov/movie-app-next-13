'use client';

import Link from 'next/link';

const ErrorMovie = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col ">
      <h1 className="text-white">Something went wrong</h1>
      <Link href="/" className="underline text-xl mt-2">
        Go home
      </Link>
    </div>
  );
};

export default ErrorMovie;
