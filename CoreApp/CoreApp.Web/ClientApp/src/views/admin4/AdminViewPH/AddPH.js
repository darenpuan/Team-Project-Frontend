import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SuccessAddPH from './successAddPH';
import Controls from "src/components/controls/Controls";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MaterialUIPickers() {
  const [startDate, setStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [endDate, setEndDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleDateChange2 = (date) => {
    setEndDate(date);
  };



  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Public Holiday Name" variant="outlined" />
      </form>
      <Grid container justify="space-around">
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

      <Grid container justify="space-around">
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

      <div>
        <Controls.Button
          type="submit"
          text="Submit"
          onClick={handleClickOpen}
        />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <SuccessAddPH />
          </DialogContent>
        </Dialog>
      </div>
    </MuiPickersUtilsProvider>

  );
}
