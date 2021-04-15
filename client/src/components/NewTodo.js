import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTodoList } from '../actions';
import Todo from './Todo';
import plus from '../img/plus.svg';

class NewTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList();
  }

  renderTodoList = () => {
    return this.props.todoList.map(todo => {
      return (
        <div key={todo.id}>
          <Todo initialValues={_.pick(todo, 'title', 'description')} />
        </div>
      );
    });
  };

  render() {
    if (!this.props.todoList) return <div>Loading...</div>;

    return (
      <div>
        <button onClick={this.onAddClick} className="adding__new-note">
          <img src={plus} alt="Plus" className="adding__new-note_icon" />
          Add
        </button>
        {this.renderTodoList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todoList: Object.values(state.todoList) };
};

export default connect(mapStateToProps, { fetchTodoList })(NewTodo);
