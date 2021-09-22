import React from 'react';
import Registration from './Registration/Registration';
import Auth from './Auth/Auth';
import TodosAll from './TodosAll/TodosAll';

const Content: React.FunctionComponent = () => (
  <>
    <Registration />
    <Auth />
    <TodosAll />
  </>
);

export default Content;
