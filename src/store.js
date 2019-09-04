import { createStore, combineReducers, compose, applyMiddleware,  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoReducer from '@/todos/reducer';
import filterReducer from '@/filter/reducer';
import weatherReducer from '@/weather/reducer';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  weather: weatherReducer,
})

const win = window;

// 用于放置redux中间件
const middlewares = [ thunkMiddleware ];

if (process.env.NODE_ENV !=='production'){
  // middlewares.push();
}

const storeEnhancers = compose(
  applyMiddleware (...middlewares) ,
  (win && win.__REDUX_DEVTOOLS_EXTENSION__) ? win.__REDUX_DEVTOOLS_EXTENSION__ () : f => f);

const store = createStore(reducer,{},storeEnhancers);

win.store = store;

export default store