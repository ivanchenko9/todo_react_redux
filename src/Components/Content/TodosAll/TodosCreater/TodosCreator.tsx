import React from 'react';
import './TodosCreator';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useStyles from '../../../../styles';

interface MyProps {
  onConfirmAllClick(): void;
  onChangeInput(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  onAddTaskClick(event: React.KeyboardEvent): void;
  inputValue: string;
}

const TodosCreator: React.FunctionComponent<MyProps> = ({
  onConfirmAllClick,
  inputValue,
  onChangeInput,
  onAddTaskClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.create__task}>
      <Button variant="contained" onClick={onConfirmAllClick}>
        Confirm all
      </Button>
      <div className={classes.task__input}>
        <TextField
          id="fullWidth"
          label="What needs to be done?"
          variant="standard"
          value={inputValue}
          onChange={onChangeInput}
          onKeyPress={onAddTaskClick}
          fullWidth
        />
      </div>
    </div>
  );
};

export default TodosCreator;
