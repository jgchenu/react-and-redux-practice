import { ALL } from '@/filter/constants';
import * as actionTypes from '@/filter/actionTypes';

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