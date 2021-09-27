import React, { useState, useContext } from 'react';
// import { connect } from 'react-redux';
import TodosCreator from './TodosCreator';
// import {
//   createTaskAC,
//   setTodosAll,
//   setIsConfirmedAll,
// } from '../../../../redux/reducers/todoReducer';
import {
  createTaskAC,
  setTodosAll,
  setIsConfirmedAll,
} from '../../../../protoRedux/reducers/todoReducer';
import { ITodos } from '../../../../protoRedux/types';
import todosAPI from '../../../../api/api';
import { StoreStatusContext, StoreContext } from '../../../../protoRedux/store';

// interface MyProps {
//   todosAll: ITodos[];
//   setTodosAll(newArray: ITodos[]): void;
//   setIsConfirmedAll(isConfirmedAll: boolean): void;
//   createTaskAC(newTask: String): void;
// }

const TodosCreatorContainer: React.FunctionComponent = () => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);

  const [inputValue, setInputValue] = useState<string>('');
  const [isConfirmedAllStatus, setIsConfirmedAllStatus] =
    useState<boolean>(false);

  // const todosAll = store.getState().todosData.todosAll;
  const todosAll = store.getState().todoReducer.todosAll;

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
    store.dispatch(setTodosAll(newArray));
    store.dispatch(setIsConfirmedAll(isConfirmedAllStatus));
    toggleStatus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    toggleStatus();
  };

  const onAddTaskClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
        store.dispatch(createTaskAC(inputValue));
        setInputValue('');
        toggleStatus();
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

// const mapStateToProps = (state) => ({
//   todosAll: state.todoReducer.todosAll,
// });

// const mapDispatchToProps = {
//   createTaskAC,
//   setTodosAll,
//   setIsConfirmedAll,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodosCreatorContainer);
