import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import '../style/TodoForm.css';

class TodoForm extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="add__field">
        <label className="add__field-title">{label}</label>
        <input
          placeholder={`Enter a ${label}`}
          className="add__field-input"
          {...input}
          autoComplete="off"
        />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <div className="actions">
          <button className=" button button__add">{this.props.action}</button>
          <Link to="/" className=" button button__cancel">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'todoForm' })(TodoForm);
