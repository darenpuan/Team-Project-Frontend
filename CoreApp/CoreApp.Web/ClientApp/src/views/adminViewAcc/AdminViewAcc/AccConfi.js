import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, } from '@material-ui/core';
import Controls from "src/components/controls/Controls";
import { useForm, Form } from 'src/components/useForm';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    margin: theme.spacing(1)
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


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    alignContent: 'center',
  },
}))(MuiDialogActions);

const DialogTitle1 = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent1 = withStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    textAlign: "center",
    width: '600px',
    height: '400px'
  },
}))(MuiDialogContent);


export default function AccForm(props) {
  const classes = useStyles();
  const { addOrEdit, recordForEdit } = props
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleChange1 = () => {
    setOpen(false);
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };


  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleChange2 = () => {
    setOpen(false);
    setOpen2(true);
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
    <div>

      <IconButton color="primary">
        <OpenInNewIcon style={{ color: "black" }} onClick={handleClickOpen} />
      </IconButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth={'true'} fullHeight={ 'true'} open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <Typography align='center'>
              Account Configuration
        </Typography>
          </DialogTitle>
    <Form onSubmit={handleSubmit}>
      <Grid container justify="center" >
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
      </Grid>
        </Form>

      <Grid container justify="center">
        <Grid item>
          <Button variant="contained" color="dark" onClick={handleChange1} className={classes.button} >
            Reset Password
            </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleChange2}  className={classes.button} >
            Submit
            </Button>
            </Grid>
        </Grid>
      </Dialog>

      <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1} >
        <DialogTitle1 align='center' id="customized-dialog-title" onClose={handleClose1} style={{ backgroundColor: green[500] }}>
           SUCCESS
        </DialogTitle1>
        <DialogContent1 dividers>
           <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
              <Typography>
                 Account reset email has been sent
              </Typography>
           </DialogContent1>
         </Dialog>


          <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2} >
                <DialogTitle1 align='center' id="customized-dialog-title" onClose={handleClose2} style={{ backgroundColor: green[500] }}>
                  SUCCESS
        </DialogTitle1>
                <DialogContent1 dividers>
                  <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
                  <Typography>
                    Account successfully update
          </Typography>
                </DialogContent1>
              </Dialog>

      </div>
  )
}
