import styles from "./loader.module.css";

const PinkLoader = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.background} />
    </div>
  );
};

export default PinkLoader;
