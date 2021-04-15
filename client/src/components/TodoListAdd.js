import React from 'react';
import { connect } from 'react-redux';

import history from '../history';
import Modal from './Modal';
import TodoForm from './TodoForm';
import { addTodo } from '../actions';

class TodoListAdd extends React.Component {
  onSubmit = formValues => {
    this.props.addTodo(formValues);
  };

  renderContent() {
    return (
      <TodoForm
        title="Title"
        description="Description"
        action="Add"
        onSubmit={this.onSubmit}
      />
    );
  }

  render() {
    return (
      <Modal
        title="Adding a new note"
        content={this.renderContent()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

export default connect(null, { addTodo })(TodoListAdd);
