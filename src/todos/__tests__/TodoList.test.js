
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as FilterTypes from '../../filter/constants';
import todosReducer from './../reducer';
import filterReducer from './../../filter/reducer';
import TodoList from '../views/todoList';
import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../actions';

enzyme.configure({ adapter: new Adapter() });


describe('todos', () => {
  it('should add new todo-item on addTodo action', () => {

    const store= createStore(combineReducers({
      todos: todosReducer, 
      filter: filterReducer
      }), {
      todos : [],
      filter: FilterTypes.ALL
    });
    
    const subject = (
      <Provider store={store}>
        <TodoList /> 
      </Provider>
    )  
    const wrapper = mount(subject);
    store.dispatch(actions.addTodo('write more test'));
    expect(wrapper.text()).toEqual('write more testx');
  });

});

