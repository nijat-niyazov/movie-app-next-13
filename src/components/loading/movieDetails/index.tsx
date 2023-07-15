import styles from './styles.module.css';

const MovieDetailsLoading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default MovieDetailsLoading;
