import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { setTodosAll } from '../../../../redux/reducers/todoReducer';
import TodosCreatorContainer from './TodosContainer/TodosContainer';
import './Settings';
import { ITodos } from '../../../../redux/types';
import todosAPI from '../../../../api/api';
import useStyles from '../../../../styles';

interface MyProps {
  todosAll: ITodos[];
  setTodosAll(newArray: ITodos[]): void;
}

interface MyState {
  arrToDisplay: string;
}

const Settings: React.FunctionComponent<MyProps> = ({ todosAll, setTodosAll }) => {
  const [arrToDisplay, setArrToDisplay] = React.useState('all');
  const classes = useStyles();

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
    const newArray: ITodos[] = todosAll.filter((todo: ITodos) => todo.isCompleted !== true);
    setTodosAll(newArray);
  };

  const onChengeStatusAll = () => {
    setArrToDisplay('all');
  };

  const onChengeStatusActive = () => {
    setArrToDisplay('active');
  };

  const onChengeStatusCompleted = () => {
    setArrToDisplay('completed');
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
            <Button onClick={onChengeStatusAll}>All</Button>
            <Button onClick={onChengeStatusActive}>Active</Button>
            <Button onClick={onChengeStatusCompleted}>Completed</Button>
          </ButtonGroup>
        </div>
        <Button variant="contained" onClick={onClearCompletedClick}>
          Clear complited
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  todosAll: state.todoReducer.todosAll,
});

const mapDispatchToProps = {
  setTodosAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
