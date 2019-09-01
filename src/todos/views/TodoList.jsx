import React from 'react';
import TodoItem from '@/todos/views/TodoItem';

class TodoList extends React.Component {

  render() {
    const  { todos } = this.props;
    return (
      <ul className='todo-list'>
        {
          todos.map(item=>(
            <TodoItem 
              key={item.id} 
              text={item.text} 
              completed={item.completed} 
              onToggle={()=>{this.props.onToggleTodo(item.id)}}
              onRemove={()=>{this.props.onRemoveTodo(item.id)}}
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList;