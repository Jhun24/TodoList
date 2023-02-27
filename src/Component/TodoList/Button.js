import styles from './TodoList.module.css';

const TodoButton = ({text, index, handler}) => {
  const handleOnclick = (e) => {
    handler(index);
  }
  return (
    <div className={styles.button} onClick={handleOnclick}>
      <p>{text}</p>
    </div>
  );
};

export default TodoButton;
