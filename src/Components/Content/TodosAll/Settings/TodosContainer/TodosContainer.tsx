import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import {
  updateTaskAC,
  deleteTaskAC,
} from '../../../../../redux/reducers/todoReducer';
import { ITodos } from '../../../../../redux/types';
import SocketContext from '../../../../../socketContext';

interface MyProps {
  arrToDisplay: string;
}
const TodosContainer: React.FunctionComponent<MyProps> = ({ arrToDisplay }) => {
  const socket = useContext(SocketContext);
  const todosAll = useSelector((state) => state.todoReducer.todosAll);
  const dispatch = useDispatch();
  let updateInfo;
  const onChangeStatusClick = (todoId: number) => {
    const newArray = todosAll.map((todo: ITodos) => {
      if (todo.id === todoId) {
        updateInfo = {
          id: todoId,
          isCompleted: !todo.isCompleted,
        };
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return { ...todo };
    });
    dispatch(updateTaskAC(updateInfo, socket));
  };

  const onDeleteTodoClick = (todoId: number) => {
    dispatch(deleteTaskAC(todoId, socket));
  };

  const whichArrayShouldDisplay = (): ITodos[] => {
    let newArr;
    if (arrToDisplay === 'active') {
      newArr = todosAll.filter((todo: ITodos) => todo.isCompleted === false);
      return newArr;
    }
    if (arrToDisplay === 'completed') {
      newArr = todosAll.filter((todo: ITodos) => todo.isCompleted === true);
      return newArr;
    }
    return todosAll;
  };

  return (
    <>
      {whichArrayShouldDisplay().map((todo: ITodos) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          onChangeStatusClick={onChangeStatusClick}
          onDeleteTodoClick={onDeleteTodoClick}
        />
      ))}
    </>
  );
};

export default TodosContainer;
