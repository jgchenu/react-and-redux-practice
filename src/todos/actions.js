import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes';

let todoId = 0; 

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
    id: todoId++,
    completed: false
  }
})


export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  }
})