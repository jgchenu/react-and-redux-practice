import React from 'react';
import TodoItem from '@/todos/views/todoItem';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.onToggle = this.onToggle.bind(this);
    
  }
  onToggle(){
    this.props.onToggleTodo();
  }

  onRemove(){
    this.props.onRemoveTodo();
  }
  render() {
    const  { todos } = this.props;
    return (
      <ul className='todo-list'>
        {
          todos.map(item=>(
            <TodoItem 
              key={item.id} 
              id={item.id}
              text={item.text} 
              completed={item.completed} 
              onToggle={this.onToggle}
              onRemove={this.onRemove}
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList;