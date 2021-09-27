import React, { useContext } from 'react';
// import { connect } from 'react-redux';
import Todo from './Todo';
// import { setTodosAll } from '../../../../../redux/reducers/todoReducer';
// import { ITodos } from '../../../../../redux/types';
import todosAPI from '../../../../../api/api';
import { ITodos } from '../../../../../protoRedux/types';
import { setTodosAll } from '../../../../../protoRedux/reducers/todoReducer';
import {
  StoreStatusContext,
  StoreContext,
} from '../../../../../protoRedux/store';

interface MyProps {
  // todosAll: ITodos[];
  // setTodosAll(newArray: ITodos[]): void;
  arrToDisplay: string;
}

const TodosContainer: React.FunctionComponent<MyProps> = ({ arrToDisplay }) => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);
  // const todosAll = store.getState().todosData.todosAll;
  const todosAll = store.getState().todoReducer.todosAll;

  const onChangeStatusClick = (todoId: number) => {
    const newArray = todosAll.map((todo: ITodos) => {
      if (todo.id === todoId) {
        todosAPI.updateTodo(todoId, todosAll);
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return { ...todo };
    });
    store.dispatch(setTodosAll(newArray));
    toggleStatus();
  };

  const onDeleteTodoClick = (todoId: number) => {
    todosAPI.deleteTodo(todoId);
    const newArray = todosAll.filter((todo: ITodos) => todo.id !== todoId);
    store.dispatch(setTodosAll(newArray));
    toggleStatus();
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

// const mapStateToProps = (state) => ({
//   todosAll: state.todoReducer.todosAll,
// });

// const mapDispatchToProps = {
//   setTodosAll,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
