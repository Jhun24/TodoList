import styles from './TodoList.module.css';

const TodoButton = ({text, handler}) => {
  return (
    <div className={styles.button}>
      <p>{text}</p>
    </div>
  );
};

export default TodoButton;
