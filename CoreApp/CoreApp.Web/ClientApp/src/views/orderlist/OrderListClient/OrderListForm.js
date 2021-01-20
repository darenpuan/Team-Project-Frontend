import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import OrderTableEdit from './OrderTableEdit';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TimePickers() {
  // The first commit of Material-UI
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container spacing={3} alignItems="flex-center" justify="space-evenly" direction="row">
          <Grid item xs={5} style={{ marginLeft:"26px" }}>
            <Typography variant="h5" gutterBottom>
               Date
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="date"
              label="Input Date"
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
                 Time
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="time"
              label="Input Time"
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
          <Grid item xs={5} style={{ marginLeft: "20px" }}>
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
            <TextField id="consignee_name" margin="dense" label="Name of Consignee *" variant="outlined" fullWidth/>
            <TextField id="consignee_add1" margin="dense" label="Address Line 1 *" variant="outlined" fullWidth />
            <TextField id="consignee_add2" margin="dense" label="Address Line 2" variant="outlined" fullWidth />
            <TextField id="consignee_contact" margin="dense" label="Contact Number *" variant="outlined" fullWidth />
            <TextField id="consignee_email" margin="dense" label="Email *" variant="outlined" fullWidth />
          </Grid>
          <Divider />
          <Grid item xs={11}>
            <OrderTableEdit />
          </Grid>
          <Grid item xs={11}>
            <TextField
              variant="outlined"
              multiline={true}
              rows={5}
              margin=""
              fullWidth
              name="remarks"
              label="Remarks"
              id="remarks"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="By checking this box, you agree to our Shipping Policy and Terms & Conditions"
            />
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
