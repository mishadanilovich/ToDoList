import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cross from '../img/delete.svg';
import '../style/Todo.css';

class Todo extends React.Component {
  renderInputTitle = ({ input }) => {
    return (
      <input {...input} autoComplete="off" className="field field__title" />
    );
  };

  renderInputDescrition = ({ input }) => {
    return (
      <input
        {...input}
        autoComplete="off"
        className="field field__description"
      />
    );
  };

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
        <button className="adding__delete">
          <div className="adding__circle">
            <img src={cross} alt="cross" class="adding__delete-icon" />
          </div>
        </button>
      );
    }
  };

  render() {
    return (
      <form className="adding">
        <div className="adding__note">
          {this.renderAction('confirm')}
          <Field name="title" component={this.renderInputTitle} />
          <Field name="description" component={this.renderInputDescrition} />
          {this.renderAction('delete')}
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'todoForm' })(Todo);
