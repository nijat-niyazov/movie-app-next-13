import Skeleton from '../skeleton';

const GenreLoader = () => {
  return (
    <div className="flex justify-around flex-wrap m-auto gap-2">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} width={144} />
        ))}
    </div>
  );
};

export default GenreLoader;
