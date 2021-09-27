import React, { useState, useContext } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import { connect } from 'react-redux';
// import { setTodosAll } from '../../../../redux/reducers/todoReducer';
import TodosCreatorContainer from './TodosContainer/TodosContainer';
// import { ITodos } from '../../../../redux/types';
import { ITodos } from '../../../../protoRedux/types';
import todosAPI from '../../../../api/api';
import useStyles from '../../../../styles';
import { StoreStatusContext, StoreContext } from '../../../../protoRedux/store';
import { setTodosAll } from '../../../../protoRedux/reducers/todoReducer';

// interface MyProps {
//   todosAll: ITodos[];
//   setTodosAll(newArray: ITodos[]): void;
// }

// interface MyState {
//   arrToDisplay: string;
// }

const Settings: React.FunctionComponent = () => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);
  // const todosAll = store.getState().todosData.todosAll;
  const todosAll = store.getState().todoReducer.todosAll;

  const [arrToDisplay, setArrToDisplay] = useState<string>('all');
  const classes = useStyles();
  const todoModes = [
    {
      id: 1,
      mode: 'all',
    },
    {
      id: 2,
      mode: 'active',
    },
    {
      id: 3,
      mode: 'completed',
    },
  ];

  const calcTodoAmount = () => {
    if (todosAll.length) {
      const todoAmount = todosAll.reduce((total, curent) => {
        if (!curent.isCompleted) {
          return total + 1;
        }
        return total;
      }, 0);
      return todoAmount;
    }
    return 0;
  };

  const onClearCompletedClick = () => {
    todosAPI.clearDone();
    const newArray: ITodos[] = todosAll.filter(
      (todo: ITodos) => todo.isCompleted !== true,
    );
    store.dispatch(setTodosAll(newArray));
    toggleStatus();
  };

  const onGetNewArrStatus = (event) => {
    setArrToDisplay(event.target.value);
    toggleStatus();
  };

  return (
    <>
      <TodosCreatorContainer arrToDisplay={arrToDisplay} />
      <div className={classes.display__settings}>
        <p className={classes.task__amount}>
          {' '}
          <span>{calcTodoAmount()}</span> items left
        </p>
        <div className={classes.display__modes}>
          <ButtonGroup variant="text" aria-label="text button group">
            {todoModes.map((newMode) => (
              <Button
                key={newMode.id}
                value={newMode.mode}
                onClick={onGetNewArrStatus}
              >
                {newMode.mode}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <Button variant="contained" onClick={onClearCompletedClick}>
          Clear complited
        </Button>
      </div>
    </>
  );
};

export default Settings;

// const mapStateToProps = (state) => ({
//   todosAll: state.todoReducer.todosAll,
// });

// const mapDispatchToProps = {
//   setTodosAll,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Settings);
