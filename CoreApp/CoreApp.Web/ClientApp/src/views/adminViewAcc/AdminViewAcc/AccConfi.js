import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, } from '@material-ui/core';
import Controls from "src/components/controls/Controls";
import { useForm, Form } from 'src/components/useForm';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SuccessReset from './successReset';
import SuccessUpdate from './successUpdate';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
  },
  pad: {
    padding: 0,
    '&:first-child': {
      padding: 0

    },
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.info.main,
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: 'white',
  },
});


export default function AccForm(props) {
  const classes = useStyles();
  const { addOrEdit, recordForEdit } = props
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [accountType, setAccountType] = React.useState('');
  const handleAccountChange = (event) => {
    setAccountType(event.target.value);
  }

  const [accountStatus, setAccountStatus] = React.useState('');
  const handleAccountStatus = (event) => {
    setAccountStatus(event.target.value);
  }


  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-select-label">Account Type</InputLabel>
          <Select
            labelId="demo-controlled-select-label"
            id="demo-controlled-select"
            value={accountType}
            onChange={handleAccountChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Customer"}>Customer</MenuItem>
            <MenuItem value={"Staff"}>Staff</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-select-label">Account Status</InputLabel>
          <Select
            labelId="demo-controlled-select-label"
            id="demo-controlled-select"
            value={accountStatus}
            onChange={handleAccountStatus}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Active"}>Active</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Suspended"}>Suspended</MenuItem>
          </Select>
        </FormControl>

        <Grid item xs={6}>
          <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
              Reset Password
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent className={classes.pad}>
                <SuccessReset />
              </DialogContent>
            </Dialog>
          </div>
                    </Grid>
          <Grid item xs={6}>
            <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen2}>
              Submit
            </Button>
            <Dialog
              open={open2}
              onClose={handleClose2}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent className={classes.pad}>
                <SuccessUpdate />
              </DialogContent>
            </Dialog>

            </div>
          </Grid>
      </Grid>
    </Form>
  )
}
