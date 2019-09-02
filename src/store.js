import { createStore, combineReducers, compose, applyMiddleware,  } from 'redux';
import { reducer as todoReducer } from '@/todos';
import { reducer as filterReducer } from '@/filter';
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

const win = window;

// 用于放置redux中间件
const middlewares = [];

if (process.env.NODE_ENV !=='production'){
  // middlewares.push();
}

const storeEnhancers = compose(
  applyMiddleware (...middlewares) ,
  (win && win.__REDUX_DEVTOOLS_EXTENSION__) ? win.__REDUX_DEVTOOLS_EXTENSION__ () : f => f);

const store = createStore(reducer,{},storeEnhancers);

win.store = store;

export default store