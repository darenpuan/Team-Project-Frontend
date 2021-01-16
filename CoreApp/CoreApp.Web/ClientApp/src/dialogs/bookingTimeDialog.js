import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SuccessDialog from 'src/dialogs/successDialog'
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
    margin:'10px',
    align: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.info.main,
    color: 'white'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
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
    padding: theme.spacing(1),
    width:'500px',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    alignContent: 'center',
  },
}))(MuiDialogActions);

export default function BookingTimeDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      <Button style={{ width: '200px', height: '40px' }} variant="outlined" color="primary" onClick={handleClickOpen}>
        New Booking Form
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography align='center'>
            Booking Slot
        </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <DialogActions align='center'>
            <div>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2020-01-16"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
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
          </DialogActions>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                <Box p={1}>
                  <SuccessDialog />
                </Box>
                <Box p={1}>
                  <Button variant="outlined" onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </Box>
              </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
