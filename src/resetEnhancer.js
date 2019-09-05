const RESET_ACTION_TYPE = '@@RESET';

const resetReducerCreator =  (newReducer, resetState) => (state, action) => {
  if(action.type === RESET_ACTION_TYPE) {
     return resetState;
  }
  return newReducer(state, action);
}


const resetEnhancer = (createStore) => (reducer, preloadState, enhancer) => {
  const store =  createStore(reducer, preloadState, enhancer);
  const reset = (resetReducer, resetState) => {
    const newReducer = resetReducerCreator(resetReducer, resetState);
    // 即使是 Store Enhancer，也无法打破 Redux 内在的一些限制，比如对 state，增强器也
    // 不可能直接去修改 state 的值，依然只能通过派发一个 action对象去完成。 
    // 在这里定义一个 特殊的 action类型阻SET ACTION TYPE，表示要重置整个 store上的值
    // 在 reset 函数中，先通过 replaceReducer 函数替换原有的 reducer，
    // 然后通过 store的dispatch函数派发一个type为RESET_ACTION_TYPE的action对象。 
    // 这个action 对象可没有预期让任何应用的功能模块捕获到，完全是这个增强器自己消耗掉
    store.replaceReducer(newReducer);
    store.dispatch({ type: RESET_ACTION_TYPE })
  }
  return {
    ...store,
    reset,
  }
}

export default resetEnhancer;