import React from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';
import TodoStore from '../../stores/TodoStore/TodoStore';
import { Provider } from 'mobx-react';

function App() 
{
  return (
    <Provider store={TodoStore}>
      <TodoList />
    </Provider>
  );
}

export default App;
