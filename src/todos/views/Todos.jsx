import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class Todos extends React.Component {
  render() {
    return (
      <div className="todos">
        <AddTodo onAddTodo={this.props.onAddTodo}/>
        <TodoList 
          todos={this.props.todos} 
          onToggleTodo={this.props.onToggleTodo}
          onRemoveTodo={this.props.onRemoveTodo}
        />
      </div>
    )
  }
}


export default Todos;