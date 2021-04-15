import { ADD_TODO, DELETE_TODOLIST, FETCH_TODOLIST, FETCH_TODO } from './types';
import history from '../history';
import todoList from '../apis/todoList';

export const addTodo = formValues => async dispatch => {
  const response = await todoList.post('/todoList', { ...formValues });

  dispatch({ type: ADD_TODO, payload: response.data });
  history.push('/');
};

export const fetchTodoList = () => async dispatch => {
  const response = await todoList.get('/todoList');

  dispatch({ type: FETCH_TODOLIST, payload: response.data });
};

export const fetchTodo = id => async dispatch => {
  const response = await todoList.get(`/todoList/${id}`);

  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const deleteTodoList = id => async dispatch => {
  await todoList.delete(`/todoList/${id}`);

  dispatch({ type: DELETE_TODOLIST, payload: id });
  history.push('/');
};
