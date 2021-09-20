import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo.tsx';
import { setTodosAll } from '../../../../redux/reducers/todoReducer.ts';

const TodosContainer: React.FunctionComponent = (props) => {
  let todosToRender = props.todosAll;

  const onChangeStatusClick = (todoId: number) => {
    const newArray = props.todosAll.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return { ...todo };
    });
    props.setTodosAll(newArray);
  };

  const onDeleteTodoClick = (todoId: number) => {
    const newArray = props.todosAll.filter((todo) => todo.id !== todoId);
    props.setTodosAll(newArray);
  };

  todosToRender = todosToRender.map(
    (todo) => <Todo key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                    onChangeStatusClick={onChangeStatusClick}
                    onDeleteTodoClick={onDeleteTodoClick}/>,
  );
  return (
      <>
        {todosToRender}
      </>
  );
};

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  setTodosAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
