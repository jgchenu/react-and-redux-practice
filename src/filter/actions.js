import { SET_FILTER } from '@/filter/actionTypes';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload:filter
})