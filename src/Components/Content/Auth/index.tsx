import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from '../../../styles';
import { setCurrentUserAC } from '../../../redux/reducers/authReducer';

const Auth: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const onSubmitClick = async () => {
    const user = { login, password };
    dispatch(setCurrentUserAC(user));
    setLogin('');
    setPassword('');
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
            Log in
          </Button>
        </div>
      </form>
      <ButtonGroup fullWidth variant="text" aria-label="text button group">
        <Button disabled>Have not registrated yet?</Button>
        <Button>
          <Link to="/registration">Create new account</Link>
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Auth;
