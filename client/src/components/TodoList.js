import React from 'react';
import Newtodo from './NewTodo';
import CompletedTodo from './CompletedTodo';
import Header from './Header';

const TodoList = () => {
  return (
    <div>
      <Header />
      <Newtodo />
      <CompletedTodo />
    </div>
  );
};

export default TodoList;
