import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: '0px'
  }
})) 

export default function Popup(props) {

  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>New Account</div>
        <Controls.ActionButton
          color="secondary"
          onClick={() => { setOpenPopup(false) }}>
          <CloseIcon />
        </Controls.ActionButton>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}
