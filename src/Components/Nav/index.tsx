import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from '../../styles';

const Nav: React.FunctionComponent = () => {
  const classes = useStyles();
  const routesButtons = [
    {
      id: 1,
      route: '/todos',
      title: 'todos',
    },
    {
      id: 2,
      route: '/auth',
      title: 'auth',
    },
    {
      id: 3,
      route: '/registration',
      title: 'registration',
    },
  ];

  return (
    <div className={classes.nav}>
      <div></div>
      <div>
        <ButtonGroup variant="text" aria-label="text button group">
          {routesButtons.map((newButton) => (
            <Button key={newButton.id} size="small">
              <Link to={newButton.route}>{newButton.title}</Link>
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Nav;
