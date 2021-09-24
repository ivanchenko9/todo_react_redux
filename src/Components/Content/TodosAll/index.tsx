import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodosCreatorContainer from './TodosCreater';
import Settings from './Settings';
import fetchTodos from '../../../redux/asyncActions/todoAsync';

type MyProps = {
  fetchTodos(): void;
};

const TodosAll: React.FunctionComponent<MyProps> = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <section>
      <TodosCreatorContainer />
      <Settings />
    </section>
  );
};

const mapDispatchToProps = {
  fetchTodos,
};

export default connect(null, mapDispatchToProps)(TodosAll);
