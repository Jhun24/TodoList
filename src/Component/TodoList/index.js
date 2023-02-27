import { useState, useEffect } from 'react';
import TodoData from './Todo';

import styles from './TodoList.module.css';

const TodoList = ({todo, setTodo, handleLocalStorage}) => {
  const handleTodoChange = (index) => {
    const promptData = prompt("수정하기", todo[index].text);
    if(promptData === null) return;
    else if(promptData === "") alert("값을 입력해주세요");
    else{
      const changeTodo = todo;
      changeTodo[index].text = promptData;
      setTodo([...changeTodo]);
      handleLocalStorage();
    }
  };

  const handleTodoComplete = (index) => {
    let completeTodo = todo;
    completeTodo[index].status = ((completeTodo[index].status + 1) % 2);
    setTodo([...completeTodo]);
    handleLocalStorage();
  };

  const handleTodoDelete = (index) => {
    let deleteTodo = todo;
    deleteTodo.splice(index, 1);
    setTodo([...deleteTodo]);
    handleLocalStorage();
  };

  return (
    <div className={styles.TodoList}>
      {todo.map((data, i)=>{
        return (
          <TodoData 
            key={i}
            index={i}
            text={data.text}
            status={data.status}
            handleTodoChange={handleTodoChange}
            handleTodoComplete={handleTodoComplete}
            handleTodoDelete={handleTodoDelete}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
