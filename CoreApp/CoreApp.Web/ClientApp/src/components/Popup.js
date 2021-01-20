import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "./controls/Controls";
import Close from '@material-ui/icons/Close';

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
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography variant="h3" componenet="div" style={{ flexGrow:1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="dark"
            onClick={() => { setOpenPopup(false) }}>
            <Close />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}
