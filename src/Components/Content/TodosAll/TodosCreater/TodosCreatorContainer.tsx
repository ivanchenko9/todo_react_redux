import React from 'react';
import { connect } from 'react-redux';
import TodosCreator from './TodosCreator';
import {
  createTaskAC,
  setTodosAll,
  setIsConfirmedAll,
} from '../../../../redux/reducers/todoReducer';
import { ITodos } from '../../../../redux/types';
import todosAPI from '../../../../api/api';

interface MyProps {
  todosAll: ITodos[];
  setTodosAll(newArray: ITodos[]): void;
  setIsConfirmedAll(isConfirmedAll: boolean): void;
  createTaskAC(newTask: String): void;
}

const TodosCreatorContainer: React.FunctionComponent<MyProps> = ({
  todosAll,
  setTodosAll,
  setIsConfirmedAll,
  createTaskAC,
}) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isConfirmedAllStatus, setIsConfirmedAllStatus] =
    React.useState<boolean>(false);

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
    setTodosAll(newArray);
    setIsConfirmedAll(isConfirmedAllStatus);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const onAddTaskClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
        createTaskAC(inputValue);
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

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  createTaskAC,
  setTodosAll,
  setIsConfirmedAll,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosCreatorContainer);
