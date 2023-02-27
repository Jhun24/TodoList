import { useState } from 'react';

import styles from './Input.module.css';

const Input = () => {
  const [todoText, setTodoText] = useState("");

  const handleTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className={styles.Input}>
        <input 
          type="text"
          value={todoText}
          placeholder="할 일을 입력해주세요"
          onChange={handleTodoText}
        />

        <div className={styles.submit_btn}>등록하기</div>
    </div>
  );
}

export default Input;
