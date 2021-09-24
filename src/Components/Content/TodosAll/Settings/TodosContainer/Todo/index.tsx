import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Checkbox from '@mui/material/Checkbox';
import useStyles from '../../../../../../styles';

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
  const classes = useStyles();
  const onChangeClick = () => {
    onChangeStatusClick(id);
  };
  const onDeleteClick = () => {
    onDeleteTodoClick(id);
  };

  return (
    <div className={classes.task}>
      <Checkbox
        checked={isCompleted}
        onClick={onChangeClick}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      <p
        className={`${classes.task__title} ${
          isCompleted ? classes.task__completed : ''
        }`}
      >
        {title}
      </p>
      <IconButton onClick={onDeleteClick} color="error" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Todo;
