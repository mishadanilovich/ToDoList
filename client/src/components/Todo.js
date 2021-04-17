import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { completedTodo, editTodo } from '../actions';
import cross from '../img/delete.svg';
import confirm from '../img/confirm.svg';
import save from '../img/save.svg';
import '../style/Todo.css';

const renderEdit = ({ initialValues, values }, editTodo, id) => {
  if (
    !(initialValues.title === values.title) ||
    !(initialValues.description === values.description)
  )
    return (
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          editTodo(id, values);
        }}
        className="adding__edit"
      >
        <div className="adding__circle">
          <img src={save} alt="Pencil" className="adding__edit-icon" />
        </div>
      </button>
    );
};

const Todo = ({ completedTodo, editTodo, data }) => {
  const formik = useFormik({
    initialValues: data,
    onSubmit: values => {
      editTodo(data.id, values);
    },
  });

  const renderCheckmark = () => {
    if (data.status)
      return (
        <img src={confirm} alt="confirm" className="adding__confirm-icon" />
      );
  };

  const onToggleStatus = event => {
    event.preventDefault();

    completedTodo(data.id, data.status ? false : true);
  };

  const renderAction = action => {
    if (action === 'confirm') {
      return (
        <button onClick={onToggleStatus} className="adding__confirm">
          <div className="adding__circle">{renderCheckmark()}</div>
        </button>
      );
    }

    if (action === 'delete') {
      return (
        <Link to={`/todolist/delete/${data.id}`} className="adding__delete">
          <div className="adding__circle">
            <img src={cross} alt="cross" className="adding__delete-icon" />
          </div>
        </Link>
      );
    }
  };

  return (
    <form className="adding__note">
      {renderAction('confirm')}
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className="field field__title"
        autoComplete="off"
      />

      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        className="field field__description"
        autoComplete="off"
      />
      {renderEdit(formik, editTodo, data.id)}
      {renderAction('delete')}
    </form>
  );
};

export default connect(null, { completedTodo, editTodo })(Todo);
