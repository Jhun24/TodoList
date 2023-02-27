import TodoData from './Todo';

import styles from './TodoList.module.css';

const TodoList = () => {

  return (
    <div className={styles.TodoList}>
      <TodoData />
    </div>
  );
}

export default TodoList;
