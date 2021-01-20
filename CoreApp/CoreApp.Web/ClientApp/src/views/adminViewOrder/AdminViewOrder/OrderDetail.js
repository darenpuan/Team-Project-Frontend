import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import OrderTable from './OrderTable';
import { FormLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TimePickers() {
  // The first commit of Material-UI
  const classes = useStyles();

  return (

    <form className={classes.root} noValidate autoComplete="off">
      <FormLabel><b><h3>Order Reference No.: #19525</h3></b></FormLabel>

      <div>
          <Grid item xs={12}>
            <OrderTable/>
          </Grid>
      </div>
    </form>
  );
}
