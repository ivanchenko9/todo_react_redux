import React from 'react';
import './TodosCreator';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
}) => (
  <div className="create__task">
    <Button
      variant="contained"
      onClick={onConfirmAllClick}
      className="confirme__all"
    >
      Confirm all
    </Button>
    <div className="task__input">
      <TextField
        id="standard-basic"
        label="What needs to be done?"
        variant="standard"
        value={inputValue}
        onChange={onChangeInput}
        onKeyPress={onAddTaskClick}
      />
    </div>
  </div>
);

export default TodosCreator;
