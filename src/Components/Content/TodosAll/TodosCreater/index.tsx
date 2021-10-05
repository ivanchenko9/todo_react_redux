import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodosCreator from './TodosCreator';
import {
  createTaskAC,
  setTodosAC,
  changeIsConfirmedAllStatusAC,
} from '../../../../redux/reducers/todoReducer';
import { ITodos } from '../../../../redux/types';
import todosAPI from '../../../../api/api';

const TodosCreatorContainer: React.FunctionComponent = () => {
  const todosAll = useSelector((state) => state.todoReducer.todosAll);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>('');
  const [isConfirmedAllStatus, setIsConfirmedAllStatus] =
    useState<boolean>(false);

  const onConfirmAllClick = () => {
    todosAPI.completeAll(!isConfirmedAllStatus);
    let newArray: ITodos[];
    if (isConfirmedAllStatus) {
      newArray = todosAll.map((todo: ITodos) => ({
        ...todo,
        isCompleted: false,
      }));
    } else {
      newArray = todosAll.map((todo: ITodos) => ({
        ...todo,
        isCompleted: true,
      }));
    }
    setIsConfirmedAllStatus(!isConfirmedAllStatus);
    dispatch(setTodosAC(newArray));
    dispatch(changeIsConfirmedAllStatusAC(isConfirmedAllStatus));
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const onAddTaskClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
        dispatch(createTaskAC(inputValue));
        setInputValue('');
      }
    }
  };

  return (
    <TodosCreator
      onChangeInput={onChangeInput}
      onAddTaskClick={onAddTaskClick}
      inputValue={inputValue}
      onConfirmAllClick={onConfirmAllClick}
    />
  );
};

export default TodosCreatorContainer;
