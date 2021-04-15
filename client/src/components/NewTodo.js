import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchTodoList } from '../actions';
import Todo from './Todo';
import plus from '../img/plus.svg';

import '../style/NewTodo.css';

class NewTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList();
  }

  renderTodoList() {
    if (!this.props.todoList) return <div>Loading...</div>;

    return this.props.todoList.map(todo => {
      if (todo.status) return null;

      return (
        <div key={todo.id}>
          <Todo
            initialValues={_.pick(todo, 'title', 'description')}
            id={todo.id}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="newTodo">
        <Link to="/todolist/add" className="adding__new-note">
          <img src={plus} alt="Plus" className="adding__new-note_icon" />
          Add
        </Link>
        <div className="adding">{this.renderTodoList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todoList: Object.values(state.todoList) };
};

export default connect(mapStateToProps, { fetchTodoList })(NewTodo);
