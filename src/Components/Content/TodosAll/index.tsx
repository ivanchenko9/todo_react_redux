import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodosCreatorContainer from './TodosCreater';
import UnathorizedTodos from './UnuthorizedTodos';
import Settings from './Settings';
import { getTodosAC } from '../../../redux/reducers/todoReducer';

const TodosAll: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated,
  );
  useEffect(() => {
    dispatch(getTodosAC());
  }, []);

  if (isAuthenticated) {
    return (
      <section>
        <TodosCreatorContainer />
        <Settings />
      </section>
    );
  }
  return <UnathorizedTodos />;
};

export default TodosAll;
