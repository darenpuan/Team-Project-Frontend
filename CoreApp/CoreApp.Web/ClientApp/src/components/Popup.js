import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "./controls/Controls";


export default function Popup(props) {

  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>New Account</div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}
