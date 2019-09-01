import React from 'react';
import { view as Filter } from '@/filter';
import { view as Todos } from '@/todos';

function TodoApp() {
  return (
    <div className="todo-app">
      <Filter />
      <Todos />
    </div>
  );
}

export default TodoApp;
