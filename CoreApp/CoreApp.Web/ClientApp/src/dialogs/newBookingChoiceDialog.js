import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import DateFnsUtils from "@date-io/date-fns";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import OrderListForm from 'src/views/orderlist/OrderListClient/OrderListForm.js';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Component3NoEdit from './component3NoEdit';
import Component3Editable from 'src/dialogs/component3Editable.js';
import ShipperConsignee from './ShipperConsigneeEmpty';
import BillOfLanding from 'src/dialogs/bookingSystemForm/billOfLanding';
import TopComponent from './bookingSystemForm/TopComponentEmpty';

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

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(1),
    border: '1px solid black',
    '&:not(:first-child)': {
      width: '100px',
      color: 'black',
      borderRadius: '5px',
      borderLeft: '1px solid black',
    },
    '&:first-child': {
      width: '100px',
      color: 'black',
      borderRadius: '5px',

    },
  },
}))(ToggleButtonGroup);

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '10px',
    align: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


{/*Choose Booking Dialog Styles*/}
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} style={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    alignContent: 'center',
  },
}))(MuiDialogActions);


{/*Date/Time Picker Dialog Styles*/ }
const DialogTitle1 = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} style={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent1 = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    width: '360px',
  },
}))(MuiDialogContent);

const DialogActions1 = withStyles((theme) => ({
  root: {
    margin: '10px',
    padding: theme.spacing(0),
    alignContent: 'center',
  },
}))(MuiDialogActions);


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

export default function NewBookingChoiceDialog() {
  {/*Choose Booking Dialog State*/ }
  const [openBookingChoice, setOpenBookingChoice] = React.useState(false);
  {/*Date/Time Picker Dialog State*/ }
  const [openTimePicker, setOpenTimePicker] = React.useState(false);
  {/*Success Dialog State*/ }
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleOpenBookingChoice = () => {
    setOpenBookingChoice(true);
  };
  const handleCloseBookingChoice = () => {
    setOpenBookingChoice(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleOpenTimePicker = () => {
    setOpenTimePicker(true);
  };
  const handleCloseTimePicker = () => {
    setOpenTimePicker(false);
  };
  const handleChangeBookingTimeDialog = () => {
    setOpenBookingChoice(false);
    setOpenTimePicker(true);
  };

  const [openOrder, setOpenOrder] = React.useState(false);

  const handleOpenOrder = () => {
    setOpenOrder(true);
  };
  const handleCloseOrder = () => {
    setOpenOrder(false);
  };
  const handleChangeOrder = () => {
    setOpenBookingChoice(false);
    setOpenOrder(true);
  };

  const [openBookingForm, setOpenBookingForm] = React.useState(false);

  const handleBookingForm = () => {
    setOpenBookingForm(true);
  };
  const handleCloseBookingForm = () => {
    setOpenBookingForm(false);
  };
  const handleChangeBookingForm = () => {
    setOpenTimePicker(false);
    setOpenBookingForm(true);
  };

  const handleOpenSuccessDialog = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
  };
  const handleChangeSuccessDialog = () => {
    setOpenBookingForm(false);
    setOpenSuccess(true);
  };
  const [alignment, setAlignment] = React.useState('0800');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const classes = useStyles();

  return (
    <div>
      {/*Choose Booking Dialog*/}
      <Button variant="outlined" color="primary" onClick={handleOpenBookingChoice}>
        New Booking
      </Button>
      <Dialog onClose={handleCloseBookingChoice} aria-labelledby="customized-dialog-title" open={openBookingChoice}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseBookingChoice}>
          <Typography align='center'>
            Choose Booking Form
        </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <DialogActions>
            <Button style={{ width: '200px', height: '40px' }} variant="outlined" color="primary" onClick={handleChangeBookingTimeDialog}>
              New Booking Form
             </Button>
          </DialogActions>
          <DialogActions>
            <Button style={{ width: '200px', height: '40px' }} variant='outlined' color="primary" onClick={handleChangeOrder}>
              New Order List
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/*Time/Date Picker Dialog*/}
      <Dialog onClose={handleCloseTimePicker} aria-labelledby="customized-dialog-title" open={openTimePicker}>
        <DialogTitle1 id="customized-dialog-title" onClose={handleCloseTimePicker}>
          <Typography align='center'>
            Booking Slot
        </Typography>
        </DialogTitle1>
        <DialogContent1 dividers>
          <DialogActions1>
            <div>
              <div align="center">
                <form className={classes.container} noValidate >
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </form>
              </div>
              <div>
                Morning
              </div>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="0800" default>
                  08:00
                </ToggleButton>
                <ToggleButton value="0830">
                  08:30
                </ToggleButton>
                <ToggleButton value="0900">
                  09:00
                </ToggleButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="0930">
                  09:30
                </ToggleButton>
                <ToggleButton value="1000">
                  10:00
                </ToggleButton>
                <ToggleButton value="1030">
                  10:30
                </ToggleButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="1100">
                  11:00
                </ToggleButton>
                <ToggleButton value="1130">
                  11:30
                </ToggleButton>
              </StyledToggleButtonGroup>
              <div>
                Afternoon
              </div>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="1200">
                  12:00
                </ToggleButton>
                <ToggleButton value="1230">
                  12:30
                </ToggleButton>
                <ToggleButton value="1300">
                  13:00
                </ToggleButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="1330">
                  13:30
                </ToggleButton>
                <ToggleButton value="1400">
                  14:00
                </ToggleButton>
                <ToggleButton value="1430">
                  14:30
                </ToggleButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="1500">
                  15:00
                </ToggleButton>
                <ToggleButton value="1530">
                  15:30
                </ToggleButton>
                <ToggleButton value="1600">
                  16:00
                </ToggleButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="1630">
                  16:30
                </ToggleButton>
                <ToggleButton value="1700">
                  17:00
                </ToggleButton>
                <ToggleButton value="1730">
                  17:30
                </ToggleButton>
              </StyledToggleButtonGroup>
            </div>
          </DialogActions1>
          <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
            <Box p={1}>
              <Button variant="outlined" color="primary" onClick={handleChangeBookingForm}>
                Next
              </Button>
            </Box>
            <Box p={1}>
              <Button variant="outlined" onClick={handleCloseTimePicker} color="primary">
                Cancel
                  </Button>
            </Box>
          </Box>
        </DialogContent1>
      </Dialog>

      {/*New Booking Form Dialog*/}
      <Dialog maxWidth="md" onClose={handleCloseBookingForm} aria-labelledby="customized-dialog-title" open={openBookingForm}>
        <DialogTitle id="customized-dialog-title" style={{ textAlign: "center" }} onClose={handleCloseBookingForm}>
          Booking Form
        </DialogTitle>
        <DialogContent dividers>
          <TopComponent />
          <ShipperConsignee />
          <Component3Editable />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleChangeSuccessDialog} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/*New Order List Dialog*/}
      <Dialog maxWidth="md" onClose={handleCloseOrder} aria-labelledby="customized-dialog-title" open={openOrder}>
        <DialogTitle id="customized-dialog-title" style={{ textAlign: "center" }} onClose={handleCloseOrder}>
          Order List Form
        </DialogTitle>
        <DialogContent dividers>
          <OrderListForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseOrder} color="primary">
            Save & Submit
          </Button>
        </DialogActions>
      </Dialog>





      {/*Success Dialog*/}
      <Dialog onClose={handleCloseSuccessDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
        <DialogTitle2 align='center' id="customized-dialog-title" onClose={handleCloseSuccessDialog} style={{ backgroundColor: green[500] }}>
          SUCCESS
        </DialogTitle2>
        <DialogContent2 dividers>
          <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
          <Typography>
            Your Booking Reference No. is: 738410
          </Typography>
        </DialogContent2>
      </Dialog>
    </div>
  );
}
