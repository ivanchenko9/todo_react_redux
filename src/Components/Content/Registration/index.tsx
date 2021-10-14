import React, { useState, useEffect } from 'react';
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

  const [email, setEmail] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [loginDirty, setLoginDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);

  const [formValid, setFormValid] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>(
    'Email cannot be empty!',
  );
  const [loginError, setLoginError] = useState<string>(
    'Login cannot be empty!',
  );
  const [passwordError, setPasswordError] = useState<string>(
    'Password cannot be empty!',
  );

  useEffect(() => {
    if (emailError || loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, loginError, passwordError]);

  const onEmailInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Email is incorrect!');
    } else {
      setEmailError('');
    }
  };

  const onLoginInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setLogin(event.target.value);
    if (event.target.value.length < 4 || event.target.value.length > 15) {
      setLoginError('Login should has 4 - 15 symbols!');
    } else {
      setLoginError('');
    }
  };

  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPassword(event.target.value);
    if (event.target.value.length < 4 || event.target.value.length > 20) {
      setPasswordError('Password should has 4 - 20 symbols!');
    } else {
      setPasswordError('');
    }
  };

  const onSubmitClick = () => {
    try {
      if (email && login && password) {
        const user = { email, login, password };
        dispatch(registrationAC(user));
        setEmail('');
        setLogin('');
        setPassword('');
        setisRegSuccesfull(true);
      } else {
        console.log('All fields are required!');
        setisRegSuccesfull(false);
      }
    } catch (error) {
      setisRegSuccesfull(false);
      console.error(error);
    }
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'login':
        setLoginDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  };

  return (
    <section className={classes.auth_and_reg_container}>
      <h2 className={classes.auth__and__reg__title}>Registration</h2>
      <form>
        <div className={classes.auth__and_reg__input}>
          <TextField
            id="fullWidth"
            name="email"
            label="Your email"
            variant="standard"
            fullWidth
            onChange={onEmailInputChange}
            value={email}
            required
            onBlur={blurHandler}
          />
        </div>
        {emailDirty && emailError && (
          <div className={classes.error__text}>{emailError}</div>
        )}
        <div className={classes.auth__and_reg__input}>
          <TextField
            id="fullWidth"
            name="login"
            label="Your login"
            variant="standard"
            fullWidth
            onChange={onLoginInputChange}
            value={login}
            required
            onBlur={blurHandler}
          />
        </div>
        {loginDirty && loginError && (
          <div className={classes.error__text}>{loginError}</div>
        )}
        <div className={classes.auth__and_reg__input}>
          <TextField
            id="fullWidth"
            name="password"
            type="password"
            label="Your password"
            variant="standard"
            fullWidth
            onChange={onPasswordInputChange}
            value={password}
            required
            onBlur={blurHandler}
          />
        </div>
        {passwordDirty && passwordError && (
          <div className={classes.error__text}>{passwordError}</div>
        )}
        <div className={classes.auth__and_reg__button}>
          {formValid ? (
            <Button fullWidth variant="contained" onClick={onSubmitClick}>
              Register now
            </Button>
          ) : (
            <Button
              fullWidth
              disabled
              variant="contained"
              onClick={onSubmitClick}
            >
              Register now
            </Button>
          )}
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
