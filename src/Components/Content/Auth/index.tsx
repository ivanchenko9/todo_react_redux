import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { StoreStatusContext, StoreContext } from '../../../protoRedux/store';
import useStyles from '../../../styles';
import { setNewRoute } from '../../../protoRedux/reducers/routeReducer';
// import { setNewRoute } from '../../../redux/reducers/routeReducer';

// interface MyProps {
//   setNewRoute(newLocation: string): void;
// }

const Auth: React.FunctionComponent = () => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);
  const classes = useStyles();
  const onCreateAccountClick = (event) => {
    store.dispatch(setNewRoute(event.target.value));
    toggleStatus();
  };
  return (
    <section className={classes.auth_and_reg_container}>
      <h2 className={classes.auth__and__reg__title}>Authentication</h2>
      <form>
        <div className={classes.auth__and_reg__input}>
          <TextField
            id="fullWidth"
            label="Your login"
            variant="standard"
            fullWidth
          />
        </div>
        <div className={classes.auth__and_reg__input}>
          <TextField
            id="fullWidth"
            label="Your password"
            variant="standard"
            fullWidth
          />
        </div>
        <div className={classes.auth__and_reg__button}>
          <Button fullWidth variant="contained">
            Log in
          </Button>
        </div>
      </form>
      <ButtonGroup fullWidth variant="text" aria-label="text button group">
        <Button disabled>Have not registrated yet?</Button>
        <Button value="/registration" onClick={onCreateAccountClick}>
          {/* <Link> */}
          Create new account
          {/* </Link> */}
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Auth;

// const mapDispatchToProps = {
//   setNewRoute,
// };

// export default connect(null, mapDispatchToProps)(Auth);
