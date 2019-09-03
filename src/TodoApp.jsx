import React from 'react';
import { view as Filter } from '@/filter';
import { view as Todos } from '@/todos';
import CountDown from '@/countDown'

function TodoApp() {
  return (
    <div className="todo-app">
      <CountDown startCount={10}>
        {(count) => <div style={{color: 'red'}}>{count}</div> }
      </CountDown>
      <Filter />
      <Todos />
    </div>
  );
}

export default TodoApp;
