import React from 'react';
import Newtodo from './NewTodo';
import ComplitedTodo from './ComplitedTodo';

const TodoList = () => {
  return (
    <div>
      <Newtodo />
      <ComplitedTodo />
    </div>
  );
};

export default TodoList;
