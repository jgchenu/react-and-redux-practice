import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../../actions';
import TodoItem from './TodoItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: ()=>{
    dispatch(removeTodo(ownProps.id));
  },
  onToggle: () => {
    dispatch(toggleTodo(ownProps.id));
  }
})

export default connect(null, mapDispatchToProps)(TodoItem);