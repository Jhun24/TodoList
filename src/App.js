import { useEffect, useState } from 'react';
import { Input, TitleDate, TodoList } from './Component';

import styles from './App.module.css';
import './init.css';

const App = () =>{
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("todo"));
    if(localData) setTodo(localData);

  }, []);

  const handleLocalStorage = () => {
    localStorage.setItem("todo",JSON.stringify(todo));
  };

  return (
    <div className={styles.App}>
      <TitleDate />
      <Input 
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList 
        todo={todo}
        setTodo={setTodo}
        handleLocalStorage={handleLocalStorage}
      />
    </div>
  );
}

export default App;
