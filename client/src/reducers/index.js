import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';

export default combineReducers({
  todoList: todoReducer,
  form: formReducer,
});
