import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodosCreatorContainer from './TodosCreater';
import UnathorizedTodos from './UnuthorizedTodos';
import Settings from './Settings';
import { getTodosAC, setTodosAC } from '../../../redux/reducers/todoReducer';
import SocketContext from '../../../socketContext';

const TodosAll: React.FunctionComponent = () => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated,
  );
  useEffect(() => {
    dispatch(getTodosAC(socket));
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
