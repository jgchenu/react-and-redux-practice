import { createStore, combineReducers, compose, applyMiddleware,  } from 'redux';
import { reducer as todoReducer } from '@/todos';
import { reducer as filterReducer } from '@/filter';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import Perf from 'react-addons-perf';
// 在react16 只需要在url后加上?react_pref
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

const win = window;

// 用于放置redux中间件
const middlewares = [];

if (process.env.NODE_ENV !=='production'){
  middlewares.push(reduxImmutableStateInvariant());
}

const storeEnhancers = compose(
  applyMiddleware (...middlewares) ,
  (win && win.devToolsExtension) ? win.devToolsExtension () : f => f);

const store = createStore(reducer,{},storeEnhancers);

win.store = store;

export default store