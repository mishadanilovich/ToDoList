import { ADD_TODO, FETCH_TODOLIST } from './types';
import todoList from '../apis/todoList';

export const addTodo = formValues => async dispatch => {
  const response = await todoList.post('/todoList', { ...formValues });

  dispatch({ type: ADD_TODO, payload: response.data });
};

export const fetchTodoList = () => async dispatch => {
  const response = await todoList.get('/todoList');

  dispatch({ type: FETCH_TODOLIST, payload: response.data });
};
