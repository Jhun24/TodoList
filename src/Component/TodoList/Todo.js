import cn from 'classnames';
import TodoButton from './Button';

import styles from './TodoList.module.css';

const TodoData = ({index, status, text, handleTodoChange, handleTodoComplete, handleTodoDelete}) => {
  return (
    <div className={styles.Todo}>
      <h2 
        className={(status)? (styles.uncomplete) : (styles.complete)}
      >
        {text}
      </h2>
      <div className={styles.btn_group}>
        <TodoButton
          text="완료"
          index={index}
          handler={handleTodoComplete}
        />
        <TodoButton 
          text="수정"
          index={index}
          handler={handleTodoChange}
        />
        <TodoButton 
          text="삭제"
          index={index}
          handler={handleTodoDelete}
        />
      </div>
    </div>
  );
};

export default TodoData;
