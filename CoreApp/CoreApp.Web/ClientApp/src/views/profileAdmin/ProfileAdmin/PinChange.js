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
import Dialog from '@material-ui/core/Dialog';
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';

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

  const [openSuccess, setOpenSuccess] = React.useState(false);

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
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle2 = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
      </MuiDialogTitle>
    );
  });

  const DialogContent2 = withStyles((theme) => ({
    root: {
      padding: theme.spacing(8),
      textAlign: "center",
      width: '600px',
      height: '360px'
    },
  }))(MuiDialogContent);

  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
  };
  const handleSuccessDialog = () => {
    setOpenSuccess(true);
  };

  return (
    <Paper elevation='0'>
      <CardHeader
        subheader="Enter the pin you use on the kiosk"
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
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="newPin"
          label="New Pin"
          id="newPin"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirm pin"
          label="Confirm Pin"
          id="confirmPin"
        />
        <Grid container justify="flex-end">
          <Button
            maxWidth="30%"
            align
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSuccessDialog}
          >
            Submit
          </Button>
        </Grid>

        <Dialog onClose={handleCloseSuccessDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
          <DialogTitle2 align='center' id="customized-dialog-title" onClose={handleCloseSuccessDialog} style={{ backgroundColor: green[500] }}>
            SUCCESS
        </DialogTitle2>
          <DialogContent2 dividers>
            <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
            <Typography>
              Security Pin has been updated successfully
          </Typography>
          </DialogContent2>
        </Dialog>

      </form>
    </Paper>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
