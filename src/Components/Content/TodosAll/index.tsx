import React, { useEffect, useContext } from 'react';
import { StoreStatusContext, StoreContext } from '../../../protoRedux/store';
// import { connect } from 'react-redux';
import TodosCreatorContainer from './TodosCreater';
import Settings from './Settings';
import todosAPI from '../../../api/api';
import { setTodosAll } from '../../../protoRedux/reducers/todoReducer';
// import fetchTodos from '../../../redux/asyncActions/todoAsync';

// type MyProps = {
//   fetchTodos(): void;
// };

const TodosAll: React.FunctionComponent = () => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);

  async function asyncGetTodos() {
    const rawTodosData = await todosAPI.fetchTodo();
    const parsedTodosData = JSON.parse(rawTodosData);
    store.dispatch(setTodosAll(parsedTodosData));
  }

  // useEffect(() => {
  //   fetchTodos();
  // }, []);
  useEffect(() => {
    asyncGetTodos;
    toggleStatus();
  }, []);

  return (
    <section>
      <TodosCreatorContainer />
      <Settings />
    </section>
  );
};

export default TodosAll;

// const mapDispatchToProps = {
//   fetchTodos,
// };

// export default connect(null, mapDispatchToProps)(TodosAll);
