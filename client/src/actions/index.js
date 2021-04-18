import {
  ADD_TODO,
  DELETE_TODOLIST,
  FETCH_TODOLIST,
  FETCH_TODO,
  EDIT_TODO,
  COMPLETED_TODO,
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
