import { useState } from 'react';

import styles from './Input.module.css';

const Input = ({todo, setTodo}) => {
  const [todoText, setTodoText] = useState("");

  const handleTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    const saveData = new Object({
      status: true,
      text: todoText,
    });
    setTodo(new Array(...todo, saveData));
    localStorage.setItem("todo", JSON.stringify(new Array(...todo, saveData)));
    setTodoText("");
  };

  return (
    <div className={styles.Input}>
        <input 
          type="text"
          value={todoText}
          placeholder="할 일을 입력해주세요"
          onChange={handleTodoText}
        />

        <div 
          className={styles.submit_btn}
          onClick={handleSubmit}
        >
          등록하기
        </div>
    </div>
  );
}

export default Input;
