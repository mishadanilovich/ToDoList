import React from 'react';
import { connect } from 'react-redux';
import { fetchTodoList } from '../actions';
import history from '../history';
import Todo from './Todo';

import '../style/CompletedTodo.css';

class CompletedTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList();
  }

  renderList() {
    if (!this.props.todoList) return <div>Loading...!</div>;

    return this.props.todoList.map(todo => {
      if (!todo.isCompleted) return null;

      return (
        <div key={todo.id}>
          <Todo data={todo} />
        </div>
      );
    });
  }

  renderContent() {
    if (history.location.pathname === '/') {
      return (
        <>
          <h3 className="completedTodo__title">Completed</h3>
          <div className="completed">{this.renderList()}</div>
        </>
      );
    }
    return (
      <div className="completed" style={{ height: '70rem' }}>
        {this.renderList()}
      </div>
    );
  }

  render() {
    return <div className="completedTodo">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return { todoList: Object.values(state.todoList) };
};

export default connect(mapStateToProps, { fetchTodoList })(CompletedTodo);
