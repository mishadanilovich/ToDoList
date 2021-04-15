import React from 'react';

const Todo = props => {
  return (
    <div className="adding">
      <div className="adding__note">
        <button className="adding__confirm">
          <div className="adding__circle"></div>
        </button>
        <input type="text" />
      </div>
    </div>
  );
};

export default Todo;
