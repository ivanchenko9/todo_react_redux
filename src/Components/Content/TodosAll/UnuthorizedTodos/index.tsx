import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from '../../../../styles';

const UnathorizedTodos: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.unauthorized__todos}>
        <p className={classes.unauthorized__title}>You are not authorized!</p>
        <ButtonGroup fullWidth variant="text" aria-label="text button group">
          <Button disabled>Please, authorize youself</Button>
          <Button>
            <Link to="/auth"> Log in account </Link>
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
};

export default UnathorizedTodos;
