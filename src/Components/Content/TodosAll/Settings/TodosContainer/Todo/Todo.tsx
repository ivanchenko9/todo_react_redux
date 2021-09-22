import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Checkbox from '@mui/material/Checkbox';
import './Todo';

interface MyProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onChangeStatusClick(id: number): void;
  onDeleteTodoClick(id: number): void;
}

const Todo: React.FunctionComponent<MyProps> = ({
  id,
  isCompleted,
  title,
  onChangeStatusClick,
  onDeleteTodoClick,
}) => {
  const onChangeClick = () => {
    onChangeStatusClick(id);
  };
  const onDeleteClick = () => {
    onDeleteTodoClick(id);
  };

  return (
    <div className="task">
      <Checkbox
        checked={isCompleted}
        onClick={onChangeClick}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      <p className={`task__title ${isCompleted ? 'done' : ''}`}>{title}</p>
      <IconButton onClick={onDeleteClick} color="error" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Todo;
