import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { StoreStatusContext, StoreContext } from '../../../protoRedux/store';
import { setNewRoute } from '../../../protoRedux/reducers/routeReducer';
import useStyles from '../../../styles';
// import { setNewRoute } from '../../../redux/reducers/routeReducer';

// interface MyProps {
//   setNewRoute(newLocation: string): void;
// }

const Registration: React.FunctionComponent = () => {
  const { stateStatus, toggleStatus } = useContext(StoreStatusContext);
  const store = useContext(StoreContext);
  const classes = useStyles();

  const onAuthClick = (event) => {
    store.dispatch(setNewRoute(event.target.value));
    toggleStatus();
  };
  return (
    <section className={classes.auth_and_reg_container}>
      <h2 className={classes.auth__and__reg__title}>Registration</h2>
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
            Register now
          </Button>
        </div>
      </form>
      <ButtonGroup fullWidth variant="text" aria-label="text button group">
        <Button disabled>Are you already have account?</Button>
        <Button value="/auth" onClick={onAuthClick}>
          {/* <Link> */}
          Log in account
          {/* </Link> */}
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Registration;

// const mapDispatchToProps = {
//   setNewRoute,
// };

// export default connect(null, mapDispatchToProps)(Registration);
