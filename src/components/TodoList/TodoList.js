import React from 'react';
import { inject, observer } from 'mobx-react';
import { useObservable } from 'mobx-react-lite';

const TodoList = ({ store }) =>
(
   <h1>Hello {store.todos}</h1>
);

export default inject('TodoStore')(observer(TodoList));
