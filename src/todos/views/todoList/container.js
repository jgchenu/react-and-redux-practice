import  { connect }  from 'react-redux';
import * as filterTypes from '@/filter/constants';
import TodoList from './TodoList';

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



export default connect(mapStateToProps)(TodoList);