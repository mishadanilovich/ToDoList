import React from 'react';
import CompletedTodo from './CompletedTodo';
import Header from './Header';

class HistoryTodo extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CompletedTodo />
      </div>
    );
  }
}

export default HistoryTodo;
