import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function TimePickers() {
  // The first commit of Material-UI
  const classes = useStyles();


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container spacing={3} alignItems="flex-center" justify="space-evenly" direction="row">
          <Grid item xs={5} style={{ display: 'flex-inline' }}>
            <Typography variant="h5" gutterBottom>
              Shipper
            </Typography>
            <TextField id="shipper_name" margin="dense" label="Name of Shipper *" variant="outlined" fullWidth />
            <TextField id="shipper_add1" margin="dense" label="Address Line 1 *" variant="outlined" fullWidth />
            <TextField id="shipper_add2" margin="dense" label="Address Line 2" variant="outlined" fullWidth />
            <TextField id="shipper_contact" margin="dense" label="Contact Number *" variant="outlined" fullWidth />
            <TextField id="shipper_email" margin="dense" label="Email *" variant="outlined" fullWidth />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={5}>
            <Typography variant="h5" gutterBottom>
              Consignee
            </Typography>
            <TextField id="consignee_name" margin="dense" label="Name of Consignee *" variant="outlined" fullWidth />
            <TextField id="consignee_add1" margin="dense" label="Address Line 1 *" variant="outlined" fullWidth />
            <TextField id="consignee_add2" margin="dense" label="Address Line 2" variant="outlined" fullWidth />
            <TextField id="consignee_contact" margin="dense" label="Contact Number *" variant="outlined" fullWidth />
            <TextField id="consignee_email" margin="dense" label="Email *" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft:"10px" }}>Type of Shipment</InputLabel>
          </Grid>
          <Grid item xs={3} align="left">
            <form noValidate autoComplete="off">
              <Select
                value='Import'
                variant="outlined"
                style={{ width: "198px", height: "40px" }}
              >
                <option aria-label="None" value="" />
                <option value={"Import"}>Import</option>
              </Select>
            </form>
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Country of Origin of Goods</InputLabel>
          </Grid>
          <Grid item xs={3} align="left">
            <form noValidate autoComplete="off">
              <Select
                value='Singapore'
                variant="outlined"
                style={{ width: "198px", height: "40px"}}
              >
                <option aria-label="None" value="" />
                <option value={"Singapore"}>Singapore</option>
              </Select>
            </form>
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Vessel / Voyage</InputLabel>
          </Grid>
          <Grid item xs={3} align="right">
            <form noValidate autoComplete="off">
              <TextField size="small" value="Aircraft" variant="outlined"/>
            </form>
          </Grid> 
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Country of Final Destination</InputLabel>
          </Grid>
          <Grid item xs={3} align="left">
            <form noValidate autoComplete="off">
              <Select
                value='malaysia'
                variant="outlined"
                style={{ width: "198px", height: "40px" }}
              >
                <option aria-label="None" value="" />
                <option value={"malaysia"}>Malaysia</option>
              </Select>
            </form>
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Port of Loading</InputLabel>
          </Grid>
          <Grid item xs={3} align="right">
            <form noValidate autoComplete="off">
              <TextField size="small" value="ABC Port" variant="outlined" />
            </form>
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Date of Departure</InputLabel>
          </Grid>
          <Grid item xs={3} align="right">
            <form noValidate autoComplete="off">
              <TextField size="small" value="12/1/2021" variant="outlined" />
            </form>
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Port of Discharge</InputLabel>
          </Grid>
          <Grid item xs={3} align="right">
            <form noValidate autoComplete="off">
              <TextField size="small" value="BCD Port" variant="outlined"  />
            </form>
          </Grid>
          <Grid item xs={3} align="left">
            <InputLabel style={{ marginTop: "10px", marginLeft: "10px" }}>Final Destination</InputLabel>
          </Grid>
          <Grid item xs={3} align="right">
            <form noValidate autoComplete="off">
              <TextField size="small" value="Johor Bahru" variant="outlined" />
            </form>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
