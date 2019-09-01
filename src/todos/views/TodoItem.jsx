import React from 'react';
import './style.css';

class TodoItem extends React.Component {
  render(){
    const { text, completed, onToggle, onRemove } = this.props;
    return (
      <li className={'todo-item ' + (completed ? 'completed': '')}>
        <input 
          className="toggle" 
          type="checkbox" 
          checked={completed ? "checked" : ""} 
          readOnly 
          onClick={onToggle}
        />
       <span>{text}</span>
       <button onClick={onRemove}>x</button>
      </li>
    );
  }
}

export default TodoItem;