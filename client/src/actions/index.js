import {
  ADD_TODO,
  DELETE_TODOLIST,
  FETCH_TODOLIST,
  FETCH_TODOHISTORY,
  FETCH_TODO,
  EDIT_TODO,
  COMPLETED_TODO,
  RESTORE_FROM_HISTORY,
  DELETE_FROM_HISTORY,
} from './types';
import history from '../history';
import todoList from '../apis/todoList';

export const addTodo = formValues => async dispatch => {
  const response = await todoList.post('/todos', {
    ...formValues,
  });

  dispatch({ type: ADD_TODO, payload: response.data });
  history.push('/');
};

export const fetchTodoList = () => async dispatch => {
  const response = await todoList.get('/todos');

  dispatch({ type: FETCH_TODOLIST, payload: response.data });
};

export const fetchTodoHistory = () => async dispatch => {
  const response = await todoList.get('/history');

  dispatch({ type: FETCH_TODOHISTORY, payload: response.data });
};

export const fetchTodo = id => async dispatch => {
  const response = await todoList.get(`/todos/${id}`);

  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const deleteTodoList = id => async dispatch => {
  await todoList.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODOLIST, payload: id });
  history.push('/');
};

export const editTodo = (id, formValues) => async dispatch => {
  const response = await todoList.put(`/todos/${id}`, formValues);

  dispatch({ type: EDIT_TODO, payload: response.data });
};

export const completedTodo = (id, checked) => async dispatch => {
  const response = await todoList.patch(`/todos/${id}`, { status: checked });

  dispatch({ type: COMPLETED_TODO, payload: response.data });
};

export const restoreFromHistory = id => async dispatch => {
  await todoList.put(`/history/${id}`);

  dispatch({ type: RESTORE_FROM_HISTORY, payload: id });
};

export const deleteFromHistory = id => async dispatch => {
  await todoList.delete(`/history/${id}`);

  dispatch({ type: DELETE_FROM_HISTORY, payload: id });
};
