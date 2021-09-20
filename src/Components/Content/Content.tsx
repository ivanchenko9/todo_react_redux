import React from 'react';
import Registration from './Registration/Registration.tsx';
import Auth from './Auth/Auth.tsx';
import TodosAll from './TodosAll/TodosAll.tsx';

const Content: React.FunctionComponent = ({ store }) => (
        <>
            <Registration/>
            <Auth/>
            <TodosAll store={store}/>
        </>
);

export default Content;
