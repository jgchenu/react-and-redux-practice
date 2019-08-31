import * as actionTypes from '@/redux/actionTypes';

export const createIncrement = (payload) => ({
  type:actionTypes.INCREMENT,
  counterCaption: payload
})

export const createDecrement = (payload) => ({
  type:actionTypes.DECREMENT,
  counterCaption: payload
})