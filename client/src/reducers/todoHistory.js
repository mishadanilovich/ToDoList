import _ from 'lodash';
import {
  DELETE_FROM_HISTORY,
  FETCH_TODOHISTORY,
  RESTORE_FROM_HISTORY,
} from '../actions/types';

const todoHistory = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOHISTORY:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case RESTORE_FROM_HISTORY:
      return _.omit(state, action.payload);
    case DELETE_FROM_HISTORY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default todoHistory;
