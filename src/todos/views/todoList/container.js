import  { connect }  from 'react-redux';
import TodoList from './TodoList';
import  { selectVisibleTodos } from '@/todos/selector'

const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state)
})



export default connect(mapStateToProps)(TodoList);