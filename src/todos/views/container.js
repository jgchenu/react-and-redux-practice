import  { connect }  from 'react-redux';
import * as filterTypes from '@/filter/constants';
import Todos from '@/todos/views/Todos';
import { addTodo, removeTodo, toggleTodo } from '@/todos/actions';

const selectVisiableTodos = (todos,filter) => {
  switch(filter){
    case filterTypes.ALL:
      return todos;
    case filterTypes.COMPLETED:
      return todos.filter(item=>item.completed);
    case filterTypes.UNCOMPLETED:
      return todos.filter(item=>!item.completed);
    default:
      throw Error('filter is not the expecting type');
  }
}

const mapStateToProps = (state) => ({
  todos: selectVisiableTodos(state.todos, state.filter)
})

const mapDispatchToProps = {
  onAddTodo: addTodo,
  onRemoveTodo: removeTodo,
  onToggleTodo: toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);