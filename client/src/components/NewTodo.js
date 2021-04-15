import React from 'react';
import Todo from './Todo';
import plus from '../img/plus.svg';

class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <button className="adding__new-note">
          <img src={plus} alt="Plus" className="adding__new-note_icon" />
          Add
        </button>
      </div>
    );
  }
}

export default NewTodo;
