import { Input, TitleDate, TodoList } from './Component';

import { styles } from './App.module.css';
import './init.css';

const App = () =>{
  return (
    <div className={styles.App}>
      <TitleDate />
    </div>
  );
}

export default App;
