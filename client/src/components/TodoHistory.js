import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodoHistory } from '../actions';
import Header from './Header';
import HistoryItem from './HistoryItem';

const renderTodo = todoHistory => {
  return todoHistory.map(todo => {
    return <HistoryItem key={todo.id} todo={todo} />;
  });
};

const HistoryTodo = props => {
  useEffect(() => {
    props.fetchTodoHistory();
  }, []);

  return (
    <div>
      <Header />
      {renderTodo(props.todoHistory)}
    </div>
  );
};

const mapStateToProps = state => {
  return { todoHistory: Object.values(state.todoHistory) };
};

export default connect(mapStateToProps, { fetchTodoHistory })(HistoryTodo);
