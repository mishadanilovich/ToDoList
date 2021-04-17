import _ from 'lodash';
import {
  ADD_TODO,
  FETCH_TODOLIST,
  DELETE_TODOLIST,
  FETCH_TODO,
  EDIT_TODO,
  COMPLETED_TODO,
} from '../actions/types';

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TODOLIST:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODOLIST:
      return _.omit(state, action.payload);
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case COMPLETED_TODO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
