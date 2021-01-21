import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TimePickers()  {
  // The first commit of Material-UI
  const classes = useStyles();

  const onFileLoad = (e, file) => console.log(e.target.result, file.name);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Alert severity="success" variant="outlined" style={{ marginBottom:"30px" }}>
        Approved
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
