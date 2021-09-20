import React from 'react';
import TodosCreatorContainer from './TodosCreater/TodosCreatorContainer.tsx';
import TodosContainer from './TodosContainer/TodosContainer.tsx';
import Settings from './Settings/Settings.tsx';

const TodosAll: React.FunctionComponent = () => (
        <>
        <TodosCreatorContainer />
        <TodosContainer />
        <Settings/>
        </>
);

export default TodosAll;
