import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  CardHeader,
  Divider,
  makeStyles
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'JohnDoe@cloudplus.com',
    phone: '',
    state: 'Singapore',
    country: 'Singapore'
  });

  const user = {
    email: 'JohnDoe@cloudplus.com',
    salutation: "Mr ",
    hp: "+(65) 9123 5678",
    office: "+(65) 6123 5678",
    name: 'John Doe',
    timezone: 'GMT+8',
    company: 'SIT LLP',
    companyadd: '172 Ang Mo Kio Avenue 8 DR-3P, Singapore (567739)'
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Paper elevation='0'>
      <CardHeader
        subheader="The pin you use on the kiosk"
        title="Pin Change"
      />
      <Divider />
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="currPin"
          label="Current Pin"
          name="Current Pin"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="newPin"
          label="New Pin"
          type="New Pin"
          id="newPin"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPin"
          label="Confirm Pin"
          type="New Pin"
          id="confirmPin"
        />
        <Grid container justify="flex-end">
          <Button
            type="submit"
            maxWidth="30%"
            align
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
