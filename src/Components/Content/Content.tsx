import React from 'react';
import { Route } from 'react-router-dom';
import Registration from './Registration/Registration';
import Auth from './Auth/Auth';
import TodosAll from './TodosAll/TodosAll';

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
