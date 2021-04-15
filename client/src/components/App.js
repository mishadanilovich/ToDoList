import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import '../style/App.css';
import Header from './Header';
import TodoList from './TodoList';
import HistoryTodo from './HistoryTodo';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/history" exact component={HistoryTodo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
