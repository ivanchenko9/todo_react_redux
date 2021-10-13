import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import useStyles from '../../styles';
import { logoutAC } from '../../redux/reducers/authReducer';

const Nav: React.FunctionComponent = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated,
  );
  const isSuccesfull = useSelector(
    (state) => state.snakbarReducer.isSuccesfull,
  );
  const messegaStatus = useSelector(
    (state) => state.snakbarReducer.messegaStatus,
  );
  const [shouldBeOpend, setShouldBeOpened] = useState<boolean>(false);
  const [isOperationSuccesfull, setIsOperationSuccesfull] =
    useState<boolean>(false);
  const currentUserId = useSelector((state) => state.authReducer.user.id);
  const currentUserEmail = useSelector((state) => state.authReducer.user.email);
  let links;
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    console.log('User id => ', currentUserId);
    dispatch(logoutAC(currentUserId));
  };

  useEffect(() => {
    setShouldBeOpened(true);
    if (isSuccesfull) {
      setIsOperationSuccesfull(true);
    } else {
      setIsOperationSuccesfull(false);
    }
  }, [isSuccesfull, messegaStatus]);

  if (isAuthenticated) {
    links = (
      <ButtonGroup variant="text" aria-label="text button group">
        <Button size="small">
          <Link to="/todos">todos</Link>
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
          <Link to="/auth">Login</Link>
        </Button>
      </ButtonGroup>
    );
  }

  const handleSneakClose = () => {
    setShouldBeOpened(false);
  };

  return (
    <div className={classes.nav}>
      <div>
        {isAuthenticated ? (
          <Button size="small" disabled>
            Welcome, {currentUserEmail}
          </Button>
        ) : null}
      </div>
      <div>{links}</div>
      <Snackbar
        open={shouldBeOpend}
        autoHideDuration={5000}
        onClose={handleSneakClose}
      >
        {isOperationSuccesfull ? (
          <Alert
            onClose={handleSneakClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            {messegaStatus}
          </Alert>
        ) : (
          <Alert
            onClose={handleSneakClose}
            severity="error"
            sx={{ width: '100%' }}
          >
            {messegaStatus}
          </Alert>
        )}
      </Snackbar>
      {isAuthenticated ? <Redirect to="/todos" /> : <Redirect to="/auth" />}
    </div>
  );
};

export default Nav;
