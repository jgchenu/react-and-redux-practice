 const logEnhancer = (createStore) => (reducer, preloadState, enhancer) => {
  const store= createStore(reducer, preloadState, enhancer);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    console.log('dispatch action:', action); 
    originalDispatch(action);
  }
  return store;
}

export default logEnhancer;

