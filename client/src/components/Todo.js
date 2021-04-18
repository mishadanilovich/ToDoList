import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { completedTodo, editTodo } from '../actions';
import cross from '../img/delete.svg';
import confirm from '../img/confirm.svg';
import save from '../img/save.svg';
import calendar from '../img/calendar.svg';
import '../style/Todo.css';

const renderEdit = ({ values }, todo, editTodo, setTodo) => {
  if (
    (!(todo.title === values.title) ||
      !(todo.description === values.description)) &&
    !todo.status
  )
    return (
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          editTodo(todo.id, values);
          setTodo(values);
        }}
        className="adding__edit"
      >
        <div className="adding__circle">
          <img src={save} alt="Pencil" className="adding__edit-icon" />
        </div>
      </button>
    );
};

const renderCheckmark = status => {
  if (status)
    return <img src={confirm} alt="confirm" className="adding__confirm-icon" />;
};

const onToggleStatus = (event, todo, completedTodo) => {
  event.preventDefault();

  completedTodo(todo.id, todo.isCompleted ? false : true);
};

const renderTimer = todo => {
  if (todo.isCompleted) {
    console.log(todo);
    return (
      <div className="date">
        <p className="date__content">{todo.completionDate}</p>
        <img src={calendar} alt="Calendar" className="adding__calendar-icon" />
      </div>
    );
  }
};

const Todo = ({ completedTodo, editTodo, data }) => {
  const [todo, setTodo] = useState({});

  const formik = useFormik({
    initialValues: data,
    onSubmit: values => {
      setTodo(values);
    },
  });

  useEffect(() => {
    setTodo(formik.initialValues);
  }, [formik.initialValues]);

  const renderAction = action => {
    if (action === 'confirm') {
      return (
        <button
          onClick={e => onToggleStatus(e, todo, completedTodo)}
          className="adding__confirm"
        >
          <div className="adding__circle">
            {renderCheckmark(todo.isCompleted)}
          </div>
        </button>
      );
    }

    if (action === 'delete') {
      return (
        <Link to={`/todolist/delete/${todo.id}`} className="adding__delete">
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
      {renderEdit(formik, todo, editTodo, setTodo)}
      {renderTimer(todo)}
      {renderAction('delete')}
    </form>
  );
};

export default connect(null, { completedTodo, editTodo })(Todo);
