import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Divider,
  makeStyles
} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  mylist: {
    width: '100%',
    maxWidth: '360',
    backgroundColor: theme.palette.background.paper,
  }
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'JohnDoe@cloudplus.com',
    phone: '',
    state: 'Singapore',
    country: 'Singapore'
  });

  const [open, setOpen] = React.useState(false);

  const user = {
    email: 'JohnDoe@cloudplus.com',
    salutation: "Mr ",
    hp: "+(65) 9123 5678",
    office: "+(65) 6123 5678",
    name: 'John Doe',
    timezone: 'GMT+8',
    company: 'SIT LLP',
    companyadd: '172 Ang Mo Kio Avenue 8 DR-3P, Singapore (567739)', 
    block: '172 Ang Mo Kio Avenue 8',
    unit: 'DR-3P',
    postalcode: '567739',
    country: 'Singapore'

  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation='0'>
      <CardHeader
        subheader="To edit personal information, select on the list below"
        title="Company Information"
      />
      <Divider />
      <List
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            BASICS
      </ListSubheader>
        }
        className={classes.mylist}
      >
        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <Typography style={{ marginRight: 125 }}>
              Company Name
              </Typography>
          </ListItemIcon>
          <ListItemText
            primary={`${user.company}`}
            inlet
            style={{ marginRight: 236 }}
          />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <Typography style={{ marginRight: 108 }}>
              Company Address
              </Typography>
          </ListItemIcon>
          <ListItemText
            primary={<Typography>172 Ang Mo Kio Avenue 8</Typography>}
            secondary="DR-3P, Singapore (567739)"
            inlet
            style={{ marginRight: 236 }}
          />
          <ChevronRightIcon />
        </ListItem>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" align="center">Update Company Information</DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={3} p={3}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="company"
                  label="Company Name"
                  value={`${user.company}`}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="nickname"
                  label="Address Nickname"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="block"
                  label="Block"
                  value={`${user.block}`}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="unitno"
                  label="Unit Number"
                  value={`${user.unit}`}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="country"
                  label="Country"
                  value={`${user.country}`}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="postal"
                  label="Postal Code"
                  value={`${user.postalcode}`}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={handleClose} color="primary">
              Update
          </Button>
          </DialogActions>
        </Dialog>

      </List>

    </Paper>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
