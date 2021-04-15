import _ from 'lodash';
import { ADD_TODO, FETCH_TODOLIST } from '../actions/types';

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TODOLIST:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};

export default todoReducer;
