import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import '../style/TodoForm.css';

class TodoForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <p className="error__message">{error}</p>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="add__field">
        <label className="add__field-title">{label}</label>
        <input
          placeholder={`Enter a ${label}`}
          className="add__field-input"
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="todoForm"
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <div className="actions">
          <button className=" button button__action">
            {this.props.action}
          </button>
          <Link to="/" className=" button button__cancel">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title || formValues.title.length < 5) {
    errors.title = 'You must enter more than 5 characters!';
  }

  if (!formValues.description || formValues.description.length < 10) {
    errors.description = 'You must enter more than 10 characters!';
  }

  return errors;
};

export default reduxForm({ form: 'todoForm', validate })(TodoForm);
