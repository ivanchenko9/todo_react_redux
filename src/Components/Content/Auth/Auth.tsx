import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from '../../../styles';

const Auth: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <section className={classes.auth_and_reg_container}>
      <h2 className={classes.auth__and__reg__title}>Authentication</h2>
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
      <ButtonGroup fullWidth variant="text" aria-label="text button group">
        <Button disabled>Have not registrated yet?</Button>
        <Button>
          <Link>Create new account</Link>
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Auth;
