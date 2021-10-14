import React, { useState, useContext } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setTodosAC } from '../../../../redux/reducers/todoReducer';
import fetchToAPI from '../../../../api/fetchToAPI';
import TodosCreatorContainer from './TodosContainer/TodosContainer';
import useStyles from '../../../../styles';
import SocketContext from '../../../../socketContext';

const Settings: React.FunctionComponent = () => {
  const socket = useContext(SocketContext);
  const todosAll = useSelector((state) => state.todoReducer.todosAll);
  const dispatch = useDispatch();
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

  const onClearCompletedClick = async () => {
    const newArray = await fetchToAPI.clearDone();
    dispatch(setTodosAC(newArray, socket));
  };

  const onGetNewArrStatus = (event) => {
    setArrToDisplay(event.target.value);
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
