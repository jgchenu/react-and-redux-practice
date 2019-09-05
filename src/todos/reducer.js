import * as actionTypes from './actionTypes';

export default (state= [],action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO: {
      return [ ...state, { id: action.payload.id,text:action.payload.text,completed: false }]
    }
    case actionTypes.REMOVE_TODO: {
      return state.filter(item => (item.id !== action.payload.id))
    }
    case actionTypes.TOGGLE_TODO: {
      return state.map(item=>{
        if(item.id === action.payload.id) {
          return { ...item, completed: !item.completed }
        }else {
          return item;
        }
      });
    }
    default:{
      return state;
    }
  }
}