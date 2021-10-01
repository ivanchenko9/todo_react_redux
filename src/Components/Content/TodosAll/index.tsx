import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodosCreatorContainer from './TodosCreater';
import Settings from './Settings';
import { AsyncGetTodos } from '../../../redux/reducers/todoReducer';

const TodosAll: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AsyncGetTodos());
  }, []);

  return (
    <section>
      <TodosCreatorContainer />
      <Settings />
    </section>
  );
};

export default TodosAll;
