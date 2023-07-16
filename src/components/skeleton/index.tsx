import styles from './styles.module.css';

// const delay = async (ms: number) =>
//   new Promise(resolve => setTimeout(resolve, ms));
// await delay(4000);

const Skeleton = ({ width, height }: { width?: number; height: number }) => {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
};

export default Skeleton;
