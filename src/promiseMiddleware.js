function isPromise(obj){
  return obj && typeof obj.then === 'function';
}

/**
action promise: 
{
  promise: fetchApi(url),
  types:['started','success','fail']
}
 */
export default function promiseMiddleware({dispatch, getState}) {
  return function(next) {
    return function(action){
      const { types, promise, ...rest } = action;
      if (!isPromise(promise) && !(action.types && action.types.length === 3)) {
        return next(action);
      }
      const [ FETCH_STARTED, SUCCESS, FAIL ] = types;
      dispatch ({ ...rest, type: FETCH_STARTED});
      return action.promise.then(
        (result) => dispatch({ ...rest, payload: result, type: SUCCESS}), 
        (error)=> dispatch({ ...rest, payload: error, type: FAIL})
      )        
    }
  }
}

