import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from '../../../styles';
import todosAPI from '../../../api/api';

const Registration: React.FunctionComponent = () => {
  const classes = useStyles();
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
    todosAPI.registration(user);
    setLogin('');
    setPassword('');
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
    </section>
  );
};

export default Registration;
