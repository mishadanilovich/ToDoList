import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { completedTodo, fetchTodoList } from '../actions';
import cross from '../img/delete.svg';
import confirm from '../img/confirm.svg';
import '../style/Todo.css';

class Todo extends React.Component {
  onToggleStatus = event => {
    event.preventDefault();

    this.props.completedTodo(
      this.props.id,
      this.props.todo[this.props.id].status ? false : true
    );
  };

  renderInput({ input, label }) {
    return (
      <input
        className={`field field__${
          label === 'title' ? 'title' : 'description'
        }`}
        {...input}
        autoComplete="off"
      />
    );
  }

  renderCheckmark() {
    if (this.props.todo[this.props.id].status)
      return (
        <img src={confirm} alt="confirm" className="adding__confirm-icon" />
      );
  }

  renderAction = action => {
    if (action === 'confirm') {
      return (
        <button
          onClick={e => this.onToggleStatus(e)}
          className="adding__confirm"
        >
          <div className="adding__circle">{this.renderCheckmark()}</div>
        </button>
      );
    }

    if (action === 'delete') {
      return (
        <Link
          to={`/todolist/delete/${this.props.id}`}
          className="adding__delete"
        >
          <div className="adding__circle">
            <img src={cross} alt="cross" className="adding__delete-icon" />
          </div>
        </Link>
      );
    }
  };

  render() {
    return (
      <form>
        <div className="adding__note">
          {this.renderAction('confirm')}
          <Field name="title" component={this.renderInput} label="title" />
          <Field
            name="description"
            component={this.renderInput}
            label="description"
          />
          {this.renderAction('delete')}
        </div>
      </form>
    );
  }
}

const setupReduxForm = reduxForm({ form: 'todo' })(Todo);

const mapStateToProps = state => {
  return { todo: state.todoList };
};

export default connect(mapStateToProps, { completedTodo, fetchTodoList })(
  setupReduxForm
);
