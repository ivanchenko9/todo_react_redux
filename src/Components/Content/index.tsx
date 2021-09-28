import React from 'react';
import { Route } from 'react-router-dom';
import Registration from './Registration';
import Auth from './Auth';
import TodosAll from './TodosAll';

const Content: React.FunctionComponent = () => (
  <main>
    <Route path="/registration" exact>
      <Registration />
    </Route>
    <Route path="/auth" exact>
      <Auth />
    </Route>
    <Route path="/todos" exact>
      <TodosAll />
    </Route>
  </main>
);

export default Content;
