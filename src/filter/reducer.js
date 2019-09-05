import { ALL } from './constants';
import * as actionTypes from './actionTypes';

export default (state = ALL, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:{
      return action.payload;
    }
    default: {
      return state;
    }
  }
}