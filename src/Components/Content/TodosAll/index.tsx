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

  socket.on('got-todos', (newArr) => {
    console.log('Get newAr in "got-todos" -> ', newArr);
    dispatch(setTodosAC(newArr, socket));
  });
  socket.on('new-todo-added', (newArr) => {
    console.log('Get newAr in "new-todo-added" -> ', newArr);
    dispatch(setTodosAC(newArr, socket));
  });
  socket.on('todo-updated', (newArr) => {
    console.log('Get newAr in "todo-updated" -> ', newArr);
    dispatch(setTodosAC(newArr, socket));
  });
  socket.on('todo-deleted', (newArr) => {
    console.log('Get newAr in "todo-deleted" -> ', newArr);
    dispatch(setTodosAC(newArr, socket));
  });
  socket.on('done-were-cleared', (newArr) => {
    console.log('Get newAr in "done-were-cleared" -> ', newArr);
    dispatch(setTodosAC(newArr, socket));
  });
  socket.on('change-is-confirmed-all-status-changed', (newArr) => {
    console.log(
      'Get newAr in "change-is-confirmed-all-status-changed" -> ',
      newArr,
    );
    dispatch(setTodosAC(newArr, socket));
  });

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
