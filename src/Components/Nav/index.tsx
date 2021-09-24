import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material';
// import { Link } from 'react-router-dom';
import { setNewRoute } from '../../redux/reducers/routeReducer';
import useStyles from '../../styles';

interface MyProps {
  setNewRoute(newLocation: string): void;
}
const Nav: React.FunctionComponent<MyProps> = ({ setNewRoute }) => {
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

  const onChangeRoute = (event) => {
    setNewRoute(event.target.value);
  };

  return (
    <div className={classes.nav}>
      <div></div>
      <div>
        <ButtonGroup variant="text" aria-label="text button group">
          {routesButtons.map((newButton) => (
            <Button
              key={newButton.id}
              value={newButton.route}
              onClick={onChangeRoute}
              size="small"
            >
              {newButton.title}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setNewRoute,
};

export default connect(null, mapDispatchToProps)(Nav);
