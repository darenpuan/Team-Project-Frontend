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
      <Alert severity="warning" variant="outlined" style={{ marginBottom:"30px" }}>
        <Grid container spacing={1} style={{ margin: "1px" }} >
          
          <Grid item xs={5} align="left" >
            <InputLabel style={{ marginTop: "2px" }}>Pending Approval</InputLabel>
          </Grid>

          <Grid item xs={1} align="right" >
          </Grid>
          
          <Grid item xs={3} align="left" >
            <Button variant="contained" color="dark" onClick={handleChange1} className={classes.button}>Reject</Button>
          </Grid>
          <Grid item xs={3} align="left" >
            <Button variant="contained" color="primary" onClick={handleChange2} className={classes.button}>Approve</Button>
          </Grid>
        </Grid>
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
              InputLabelProps={{
                shrink: true,
              }}
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
              inputProps={{
                step: 300, // 5 min
              }}
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
              <Button variant="contained" color="primary" component="span">
                Upload
    </Button>
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
            />
          </Grid>

          <Grid item xs={5} style={{ marginLeft: "26px", marginBottom: "30px" }}>
            <Typography variant="h5" gutterBottom>
              Receiving Warehouse *
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ marginBottom: "30px" }}>
          <Select
            labelId="demo-controlled-select-label"
              id="demo-controlled-select"
              fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Customer"}>Customer</MenuItem>
            <MenuItem value={"Staff"}>Staff</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
          </Grid>
          
        </Grid>
      </div>
    </form>
  );
}
