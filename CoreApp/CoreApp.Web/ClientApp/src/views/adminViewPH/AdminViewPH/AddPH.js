import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from "@date-io/date-fns";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
  pad: {
    padding: 0,
    '&:first-child': {
      padding: 0,
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
    padding: theme.spacing(5),
  },
}))(MuiDialogContent);

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
    height: '360px'
  },
}))(MuiDialogContent);

export default function MaterialUIPickers() {
  const [startDate, setStartDate] = React.useState(new Date('2020-01-21T15:20:54'));
  const [endDate, setEndDate] = React.useState(new Date('2020-01-21T15:20:54'));
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenSuccessDialog = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
  };
  const handleChangeSuccessDialog = () => {
    setOpen(false);
    setOpenSuccess(true);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleDateChange2 = (date) => {
    setEndDate(date);
  };



  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Public Holiday
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography align='center'>
            Public Holiday
        </Typography>
        </DialogTitle>
        <DialogContent>

      <Grid container justify="center">
      <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Public Holiday Name" variant="outlined" />
        </form>
      </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="center">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="startDate"
          label="Start Date"
          value={startDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>

      <Grid container justify="center">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="endDate"
          label="End Date"
          value={endDate}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
              />
          </Grid>
            </MuiPickersUtilsProvider>
            </DialogContent>

      <Grid container justify="center">
           <Button style={{marginBottom:"20px", width:"200px"}} size="large" onClick={handleChangeSuccessDialog} variant='contained' color="primary">
              Submit
            </Button>
            </Grid>
        </Dialog>
         <Dialog onClose={handleCloseSuccessDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
        <DialogTitle1 align='center' id="customized-dialog-title" onClose={handleCloseSuccessDialog} style={{ backgroundColor: green[500] }}>
          SUCCESS
        </DialogTitle1>
        <DialogContent1 dividers>
          <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
          <Typography>
            Public Holiday Successfully added
          </Typography>
        </DialogContent1>
      </Dialog>


    </div>

  );
}
