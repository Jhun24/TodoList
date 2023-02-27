import TodoButton from './Button';

import styles from './TodoList.module.css';

const TodoData = () => {
  return (
    <div className={styles.Todo}>
      <h2>할 일</h2>
      <div className={styles.btn_group}>
        <TodoButton 
          text="완료"
        />
        <TodoButton 
          text="수정"
        />
        <TodoButton 
          text="삭제"
        />
      </div>
    </div>
  );
};

export default TodoData;
