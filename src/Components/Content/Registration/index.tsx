import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from '../../../styles';
import { registrationAC } from '../../../redux/reducers/authReducer';

const Registration: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isRegSuccesfull, setisRegSuccesfull] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLoginInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setLogin(event.target.value);
  };

  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPassword(event.target.value);
  };

  const onSubmitClick = () => {
    const user = { login, password };
    dispatch(registrationAC(user));
    setLogin('');
    setPassword('');
    setisRegSuccesfull(true);
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
            onChange={onLoginInputChange}
            value={login}
          />
        </div>
        <div className={classes.auth__and_reg__input}>
          <TextField
            id="fullWidth"
            label="Your password"
            variant="standard"
            fullWidth
            onChange={onPasswordInputChange}
            value={password}
          />
        </div>
        <div className={classes.auth__and_reg__button}>
          <Button fullWidth variant="contained" onClick={onSubmitClick}>
            Register now
          </Button>
        </div>
      </form>
      <ButtonGroup fullWidth variant="text" aria-label="text button group">
        <Button disabled>Are you already have account?</Button>
        <Button>
          <Link to="/auth"> Log in account </Link>
        </Button>
      </ButtonGroup>
      {isRegSuccesfull ? <Redirect to="/auth" /> : null}
    </section>
  );
};

export default Registration;
