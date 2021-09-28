import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodosCreatorContainer from './TodosCreater';
import Settings from './Settings';
import fetchTodos from '../../../redux/asyncActions/todoAsync';

const TodosAll: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <section>
      <TodosCreatorContainer />
      <Settings />
    </section>
  );
};

export default TodosAll;
