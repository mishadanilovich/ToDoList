import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import cross from '../img/delete.svg';
import '../style/Todo.css';

class Todo extends React.Component {
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

  renderAction = action => {
    if (action === 'confirm') {
      return (
        <button className="adding__confirm">
          <div className="adding__circle"></div>
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

export default reduxForm({ form: 'todo' })(Todo);
