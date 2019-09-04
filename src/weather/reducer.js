import * as Status from './constants';
import * as actionTypes from './actionTypes';
export default (state = { status: Status.LOADING }, action ) => {
  switch(action.type) {
    case actionTypes.FETCH_STARTED: {
      return { status: Status.LOADING };
    }
    case actionTypes.FETCH_SUCCESS: {
      return { ...state, status: Status.SUCCESS, ...action.payload }
    }
    case actionTypes.FETCH_FAIL: {
      return { status: Status.FAIL };
    }
    default: {
      return state;
    }
  }
}