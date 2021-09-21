import React from 'react';
import { connect } from 'react-redux';
import TodosCreatorContainer from './TodosCreater/TodosCreatorContainer.tsx';
// import TodosContainer from './Settings/TodosContainer/TodosContainer.tsx';
import Settings from './Settings/Settings.tsx';
import fetchTodos from '../../../redux/asyncActions/todoAsync.ts';

type MyProps = {
  fetchTodos(): void
}

class TodosAll extends React.Component<MyProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
        <>
        <TodosCreatorContainer />
        <Settings/>
        </>
    );
  }
}

const mapDispatchToProps = {
  fetchTodos,
};

export default connect(null, mapDispatchToProps)(TodosAll);
