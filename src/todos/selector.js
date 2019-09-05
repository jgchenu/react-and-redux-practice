import { createSelector } from  'reselect';
import * as filterTypes from '../filter/constants';


const getFilter = state => state.filter;
const getTodos = state => state.todos; 

export const selectVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
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
)