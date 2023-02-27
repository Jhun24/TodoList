import styles from './Date.module.css';

const TitleDate = () => {
  const nowDate = `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일`;

  return (
    <div className={styles.TitleDate}>
      <h2>{nowDate}</h2>
    </div>
  );
}

export default TitleDate;
