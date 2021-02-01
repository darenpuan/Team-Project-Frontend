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
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Component3NoEdit from 'src/dialogs/component3NoEdit';
import Component3EditEditable from 'src/dialogs/component3EditEditable';
import ShipperConsigneeNoEdit from 'src/dialogs/ShipperConsigneeNoEdit';
import ShipperConsigneeEdit from 'src/dialogs/ShipperConsigneeEdit.js';
import BillOfLanding from 'src/dialogs/bookingSystemForm/billOfLanding';
import TopComponent from 'src/dialogs/bookingSystemForm/TopComponentPending';
import TopComponentEditEmpty from 'src/dialogs/bookingSystemForm/TopComponentEditEmpty';
import { green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccessCancel] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenSuccessCancelDialog = () => {
    setOpenSuccessCancel(true);
  }

  const handleCloseSuccessCancelDialog = () => {
    setOpenSuccessCancel(false);
  }

  const handleChangeSuccessCancelDialog = () => {
    setOpen(false);
    setOpenSuccessCancel(true);
  };

  const handleOpenEditDialog = () => {
    setOpenEdit(true);
  }

  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  }

  const handleChangeEditDialog = () => {
    setOpen(false);
    setOpenEdit(true);
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <OpenInNewIcon />
      </IconButton>
      <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" style={{ textAlign: "center" }} onClose={handleClose}>
          Booking Form
        </DialogTitle>
        <DialogContent dividers>
          <TopComponent />
          <ShipperConsigneeNoEdit />
          <Component3NoEdit />
          <BillOfLanding/>
        </DialogContent>
        <DialogActions>
          <DialogActions>
            <Button variant="contained" style={{ marginRight: "10px", backgroundColor: "red", color: "white", width: "175px" }} onClick={handleChangeSuccessCancelDialog}>Cancel Booking</Button>
            <Button variant="contained" style={{ backgroundColor: green[500], color: "white", width: "175px" }} onClick={handleChangeEditDialog}>Edit Booking</Button>
          </DialogActions>
        </DialogActions>
      </Dialog>






      {/*Cancel Success Dialog*/}
      <Dialog onClose={handleCloseSuccessCancelDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
    <DialogTitle2 align='center' id="customized-dialog-title" onClose={handleCloseSuccessCancelDialog} style={{ backgroundColor: green[500] }}>
      SUCCESS
        </DialogTitle2>
    <DialogContent2 dividers>
      <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
      <Typography>
        Booking Cancelled Successfully
          </Typography>
    </DialogContent2>
      </Dialog>




      {/*Edit Dialog*/}
      <Dialog maxWidth="md" onClose={handleCloseEditDialog} aria-labelledby="customized-dialog-title" open={openEdit}>
        <DialogTitle id="customized-dialog-title" style={{ textAlign: "center" }} onClose={handleCloseEditDialog}>
          Booking Form
        </DialogTitle>
        <DialogContent dividers>
          <TopComponentEditEmpty />
          <ShipperConsigneeEdit />
          <Component3EditEditable />
          <BillOfLanding />
        </DialogContent>
        <DialogActions>
          <DialogActions>
            <Button autoFocus onClick={handleCloseEditDialog} color="primary">
              Save & Submit
          </Button>
          </DialogActions>
        </DialogActions>
      </Dialog>

    </div>
  );
}
