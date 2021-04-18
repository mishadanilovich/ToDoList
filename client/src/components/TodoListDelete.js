import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodoList, fetchTodo } from '../actions';
import Modal from './Modal';
import history from '../history';

import '../style/TodoListDelete.css';

class TodoListDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onClick = () => {
    this.props.deleteTodoList(this.props.match.params.id);
  };

  renderTitle() {
    if (!this.props.todo || !this.props.todo.title)
      return 'Are you sure you want to delete this note?';

    return `Are you sure you want to delete "${this.props.todo.title}" note?`;
  }

  renderContent() {
    return (
      <div className="delete">
        <h3 className="delete__title">{this.renderTitle()}</h3>
        <div className="actions">
          <button onClick={this.onClick} className="button button__action">
            Delete
          </button>
          <Link to="/" className="button button__cancel">
            Cancel
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Deleting a note"
        content={this.renderContent()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todoList[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteTodoList, fetchTodo })(
  TodoListDelete
);
