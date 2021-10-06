import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from '../../styles';
import todosAPI from '../../api/api';
import { logoutAC } from '../../redux/reducers/authReducer';

const Nav: React.FunctionComponent = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated,
  );
  let links;
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logoutAC());
  };

  if (isAuthenticated) {
    links = (
      <ButtonGroup variant="text" aria-label="text button group">
        <Button size="small">
          <Link to="/todos">todos</Link>
        </Button>
        <Button size="small">
          <Link to="/auth">auth</Link>
        </Button>
        <Button size="small">
          <Link to="/registration">registration</Link>
        </Button>
        <Button size="small" onClick={onLogoutClick}>
          Logout
        </Button>
      </ButtonGroup>
    );
  } else {
    links = (
      <ButtonGroup variant="text" aria-label="text button group">
        <Button size="small">
          <Link to="/auth">auth</Link>
        </Button>
        <Button size="small">
          <Link to="/registration">registration</Link>
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <div className={classes.nav}>
      <div></div>
      <div>{links}</div>
    </div>
  );
};

export default Nav;
