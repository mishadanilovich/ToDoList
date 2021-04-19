import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { restoreFromHistory, deleteFromHistory } from '../actions';
import cross from '../img/delete.svg';
import calendar from '../img/calendar.svg';
import arrow from '../img/arrow-up.svg';

const renderTimer = todo => {
  return (
    <div className="date">
      <p className="date__content">{todo.completionDate.substr(0, 10)}</p>
      <img src={calendar} alt="Calendar" className="adding__calendar-icon" />
    </div>
  );
};

const onRestore = (props, event) => {
  event.preventDefault();

  props.restoreFromHistory(props.todo.id);
};

const onDelete = (props, event) => {
  event.preventDefault();

  props.deleteFromHistory(props.todo.id);
};

const HistoryItem = props => {
  const formik = useFormik({
    initialValues: props.todo,
    onSubmit: values => {
      console.log(values);
    },
  });

  const renderAction = action => {
    if (action === 'confirm') {
      return (
        <button onClick={e => onRestore(props, e)} className="adding__confirm">
          <div className="adding__circle">
            <img src={arrow} alt="arrow" className="adding__confirm-icon" />
          </div>
        </button>
      );
    }

    if (action === 'delete') {
      return (
        <button onClick={e => onDelete(props, e)} className="adding__delete">
          <div className="adding__circle">
            <img src={cross} alt="cross" className="adding__delete-icon" />
          </div>
        </button>
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
        disabled={'disabled'}
      />

      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        className="field field__description"
        autoComplete="off"
        disabled={'disabled'}
      />
      {renderTimer(props.todo)}
      {renderAction('delete')}
    </form>
  );
};

export default connect(null, { deleteFromHistory, restoreFromHistory })(
  HistoryItem
);
