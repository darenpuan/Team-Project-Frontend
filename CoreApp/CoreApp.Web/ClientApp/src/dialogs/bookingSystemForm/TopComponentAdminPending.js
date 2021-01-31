import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Alert from "@material-ui/lab/Alert";
import InputLabel from '@material-ui/core/InputLabel';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TimePickers()  {
  // The first commit of Material-UI
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleChange1 = () => {
    setOpen(false);
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };


  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleChange2 = () => {
    setOpen(false);
    setOpen2(true);
  };


  const onFileLoad = (e, file) => console.log(e.target.result, file.name);

  return (
    <form className={classes.root} noValidate autoComplete="off">


      <Alert
        severity="warning" variant="outlined" style={{ marginBottom: "30px" }}
        action={
          <div>
            <Button variant="contained" style={{ backgroundColor: "red", color:"white", marginRight:"10px", width:"175px" }} onClick={handleChange1} className={classes.button}>Reject</Button>
            <Button variant="contained" style={{ backgroundColor: green[500], color: "white", width: "175px" }} onClick={handleChange2} className={classes.button}>Approve</Button>
          </div>
        }
      >
        <InputLabel style={{ marginTop: "2px" }}>Pending Approval</InputLabel>
      </Alert>

      <div>
        <Grid container spacing={3} alignItems="flex-center" justify="space-evenly" direction="row">
          <Grid item xs={5} style={{ marginLeft:"26px" }}>
            <Typography variant="h5" gutterBottom>
               Date Selected
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="date"
              type="date"
              fullWidth
              defaultValue="2017-05-24"
              className={classes.textField}
              style={{ backgroundColor: "lightGrey" }}
              disabled
            />
          </Grid>
          <Grid item xs={5} style={{ marginLeft: "26px" }}>
            <Typography variant="h5" gutterBottom>
                 Time Slot Selected
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="time"
              type="time"
              fullWidth
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ backgroundColor: "lightGrey" }}
              disabled
            />   
          </Grid>
          <Grid item xs={5} style={{ marginLeft: "26px" }}>
            <Typography variant="h5" gutterBottom>
              Bill of Lading
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Grid container spacing={1} style={{ width: "300px" }} >

                <Grid item xs={9} align="right" >
                  <TextField size="small" value="Upload Bill of Lading" variant="outlined" disabled style={{ backgroundColor: "lightGrey" }} fullWidth />
                </Grid>

                <Grid item xs={1} align="right" >
                  <Button variant="contained" color="dark" component="span">
                    Browse
                  </Button>

                </Grid>
              </Grid>
            </label>
          </Grid>

          <Grid item xs={5} style={{ marginLeft: "26px" }}>
            <Typography variant="h5" gutterBottom>
              Export Declaration No. *
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="declare"
              type="text"
              fullWidth
              defaultValue="123456"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ backgroundColor: "lightGrey" }}
              disabled
            />
          </Grid>

          <Grid item xs={5} style={{ marginLeft: "26px", marginBottom: "30px" }}>
            <Typography variant="h5" gutterBottom>
              Receiving Warehouse *
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ marginBottom: "30px" }}>
            <TextField
              id="declare"
              type="text"
              fullWidth
              defaultValue="Warehouse B"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ backgroundColor: "lightGrey" }}
              disabled
            />
          </Grid>
          
        </Grid>
      </div>
    </form>
  );
}
