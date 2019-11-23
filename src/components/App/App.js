import React from 'react';
import { useEffect } from 'react';
import './App.css';
import TodoStore from '../../stores/TodoStore/TodoStore';

function App() 
{
  useEffect(() =>
  {
    TodoStore.addTodo("read MobX tutorial");
    TodoStore.addTodo("try MobX");
    TodoStore.todos[0].completed = true;
    TodoStore.todos[1].task = "try MobX in own project";
    TodoStore.todos[0].task = "grok MobX tutorial";
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
