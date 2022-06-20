import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Uses from './route/Uses';
import LTRoutes from './route/LTRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={LTRoutes}/>
      </Switch>
      <Switch>
        <Route path={'/uses'} component={Uses}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;