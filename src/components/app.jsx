import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import MainPage from './pages/main-page/main-page.jsx';
import ArticlePage from './pages/article-page/article-page.jsx';

const App = () => {
  // выключи это потом
  console.log = function () {};

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainPage link='/article' />
        </Route>
        <Route path='/article'>
          <ArticlePage link='/' />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
