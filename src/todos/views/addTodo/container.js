import  { connect }  from 'react-redux';
import AddTodo from './AddTodo';
import { addTodo } from '../../actions';


const mapDispatchToProps = {
  onAddTodo: addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);