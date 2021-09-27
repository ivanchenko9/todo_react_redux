import React, { useContext } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { StoreStatusContext, StoreContext } from '../../protoRedux/store';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { setNewRoute } from '../../redux/reducers/routeReducer';
import { setNewRoute } from '../../protoRedux/reducers/routeReducer';
import useStyles from '../../styles';

// interface MyProps {
//   setNewRoute(newLocation: string): void;
// }
const Nav: React.FunctionComponent = () => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);
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
    console.log('Expected AC use with next value:', event.target.value);
    store.dispatch(setNewRoute(event.target.value));
    toggleStatus();
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

export default Nav;

// const mapDispatchToProps = {
//   setNewRoute,
// };

// export default connect(null, mapDispatchToProps)(Nav);
