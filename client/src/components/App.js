import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import '../style/App.css';
import TodoList from './TodoList';
import HistoryTodo from './TodoHistory';
import TodoListAdd from './TodoListAdd';
import TodoListDelete from './TodoListDelete';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/history" exact component={HistoryTodo} />
          <Route path="/todolist/add" exact component={TodoListAdd} />
          <Route path="/todolist/delete/:id" exact component={TodoListDelete} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
