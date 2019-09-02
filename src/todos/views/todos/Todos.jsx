import React from 'react';
import AddTodo from '@/todos/views/addTodo';
import TodoList from '@/todos/views/todoList';

class Todos extends React.Component {
  render() {
    return (
      <div className="todos">
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}


export default Todos;