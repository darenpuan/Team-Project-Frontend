import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Component3NoEdit from 'src/dialogs/component3NoEdit';
import Component3Editable from 'src/dialogs/component3Editable.js';
import ShipperConsigneeNoEdit from 'src/dialogs/ShipperConsigneeNoEdit';
import BillOfLanding from 'src/dialogs/bookingSystemForm/billOfLanding';
import TopComponentAdminPending from 'src/dialogs/bookingSystemForm/TopComponentAdminPending';
import { green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const boxProps = {
  bgcolor: 'background.paper',
  marginTop: 1,
  marginLeft: 3,
  m: 0.5,
  border: 1,
  borderRadius: 5,
  style: { width: '650px', height: '300px' },
};

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.info.main,
    color: "white",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

{/*Success Dialog Styles*/ }
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

export default function CustomizedDialogs() {
  const classes = useStyles();
  const [openBookingForm, setOpenBookingForm] = React.useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);
  const [openReason, setOpenReason] = React.useState(false);
  const [openComponent, setComponent] = React.useState(false);
  const [openSuccessReject, setOpenSuccessReject] = React.useState(false);

  const handleClickOpen = () => {
    setOpenBookingForm(true);
  };
  const handleCloseBookingForm = () => {
    setOpenBookingForm(false);
  };

  const handleChange1 = () => {
    setOpenBookingForm(false);
  };

  const handleChangeApproveDialog = () => {
    setOpenBookingForm(false);
    setOpenApprove(true);
  };

  const handleOpenApproveDiaglog = () => {
    setOpenApprove(true);
  }

  const handleCloseApproveDialog = () => {
    setOpenApprove(false);
  }

  const handleChangeReasonDialog = () => {
    setOpenBookingForm(false);
    setOpenReason(true);
  };

  const handleOpenReasonDiaglog = () => {
    setOpenReason(true);
  }

  const handleCloseReasonDialog = () => {
    setOpenReason(false);
  }

  const handleOpenComponent = () => {
    setComponent(true);
  };
  const handleCloseComponent = () => {
    setComponent(false);
  };

  const [transportation, setTransportation] = React.useState('');
  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };
  const [reason, setReason] = React.useState('');
  const handleReason = (event) => {
    setReason(event.target.value);
  };

  const handleOpenSuccessRejectDiaglog = () => {
    setOpenSuccessReject(true);
  }

  const handleCloseSuccessRejectDialog = () => {
    setOpenSuccessReject(false);
  }

  const handleChangeSuccessRejectDialog = () => {
    setOpenReason(false);
    setOpenSuccessReject(true);
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <OpenInNewIcon />
      </IconButton>
      <Dialog maxWidth="md" onClose={handleCloseBookingForm} aria-labelledby="customized-dialog-title" open={openBookingForm}>
        <DialogTitle id="customized-dialog-title" style={{ textAlign: "center" }} onClose={handleCloseBookingForm}>
          Booking Form
        </DialogTitle>
        <DialogContent dividers>
          <TopComponentAdminPending />
          <ShipperConsigneeNoEdit />
          <Component3NoEdit />
          <BillOfLanding />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" style={{ backgroundColor: "red", color: "white", marginRight: "10px", width: "175px" }} onClick={handleChangeReasonDialog} className={classes.button}>Reject</Button>
          <Button variant="contained" style={{ backgroundColor: green[500], color: "white", width: "175px" }} onClick={handleChangeApproveDialog} className={classes.button}>Approve</Button>
        </DialogActions>
      </Dialog>


      {/*Approve Dialog*/}
      <Dialog onClose={handleCloseApproveDialog} aria-labelledby="customized-dialog-title" open={openApprove} >
        <DialogTitle2 align='center' id="customized-dialog-title" onClose={handleCloseApproveDialog} style={{ backgroundColor: green[500] }}>
          SUCCESS
        </DialogTitle2>
        <DialogContent2 dividers>
          <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
          <Typography>
            Booking Approved
          </Typography>
        </DialogContent2>
      </Dialog>

      <Dialog onClose={handleCloseReasonDialog} aria-labelledby="customized-dialog-title" open={openReason} >
      <DialogTitle id="customized-dialog-title" onClose={handleCloseReasonDialog}>
        <Typography align='center'>
          Booking Rejected
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center">
          <Box borderColor="text.primary" {...boxProps}>

            <Grid container spacing={1} style={{ margin: "10px", width: "500px" }} >
              <Grid item xs={7} align="left">
                <InputLabel style={{ marginTop: "10px" }}>Reason for Rejecting</InputLabel>

                <Select
                  disabled={transportation == 'no'}
                  style={{ width: "300px", textAlign: "left" }}
                  value={reason}
                  onChange={handleReason}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={'nil'}>NIL</MenuItem>
                  <MenuItem value={'information'}>No Information</MenuItem>
                </Select>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <InputLabel style={{ marginTop: "10px" }}>Remarks</InputLabel>
                <Divider />
                <TextField
                  variant="outlined"
                  multiline={true}
                  rows={5}
                  margin=""
                  fullWidth
                  name="remarks"
                  id="remarks"
                />

              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid style={{ margin: "5px" }} >
          <Grid item xs={12} align="right">
              <Button variant="contained" style={{ backgroundColor: "red", color: "white", marginRight: "10px", width: "175px" }} onClick={handleCloseReasonDialog} className={classes.button}>Cancel</Button>
              <Button variant="contained" style={{ backgroundColor: "blue", color: "white", width: "175px" }} onClick={handleChangeSuccessRejectDialog} className={classes.button}>Submit</Button>
          </Grid>
        </Grid>
        </DialogContent>
      </Dialog>

      {/*Reject Success Dialog*/}
      <Dialog onClose={handleCloseSuccessRejectDialog} aria-labelledby="customized-dialog-title" open={openSuccessReject} >
        <DialogTitle2 align='center' id="customized-dialog-title" onClose={handleCloseSuccessRejectDialog} style={{ backgroundColor: green[500] }}>
          SUCCESS
        </DialogTitle2>
        <DialogContent2 dividers>
          <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
          <Typography>
            Booking Rejected Successfully
          </Typography>
        </DialogContent2>
      </Dialog>


    </div>
  );
}
