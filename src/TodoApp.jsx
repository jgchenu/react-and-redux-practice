import React from 'react';
import  Filter from '@/filter/views/filter';
import  Todos from '@/todos/views/todos';
import CountDown from '@/countDown'

function TodoApp() {
  return (
    <div className="todo-app">
      <CountDown startCount={10}>
        {(count) => count>0 ? <div style={{color: 'red'}}>{count}</div> : '恭喜倒计时成功' }
      </CountDown>
      <Filter />
      <Todos />
    </div>
  );
}

export default TodoApp;
