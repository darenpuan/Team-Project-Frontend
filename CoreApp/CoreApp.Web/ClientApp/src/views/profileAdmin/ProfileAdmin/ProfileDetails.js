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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';


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
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const user = {
    email: 'JohnDoe@cloudplus.com',
    firstName: 'John',
    lastName: 'Doe',
    salutation: "Mr ",
    hp: "+(65) 9123 5678",
    office: "+(65) 6123 5678",
    name: 'John Doe',
    timezone: 'GMT+8'
  };

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1.5),
      backgroundColor: theme.palette.info.main,
      color: 'white',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(0),
      top: theme.spacing(0),
      color: 'white',
    },
  });

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
  };
  const handleChangeSuccessDialog = () => {
    setOpen(false);
    setOpenSuccess(true);
  };

  return (
    <Paper elevation='0'>
      <CardHeader
        subheader="To edit personal information, select on the list below"
        title="Profile Information"
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
            <Typography style={{ marginRight: 170 }}>
              Full Name
              </Typography>
          </ListItemIcon>
          <ListItemText
            primary={`${user.salutation}` + `${user.name}`}
            inlet
            style={{ marginRight: 240 }}
          />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <Typography style={{ marginRight: 137 }}>
              Email Address
              </Typography>
          </ListItemIcon>
          <ListItemText
            primary={`${user.email}`}
            inlet
            style={{ marginRight: 240 }}
          />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <Typography style={{ marginRight: 130 }}>
              Mobile Number
              </Typography>
          </ListItemIcon>
          <ListItemText
            primary={`${user.hp}`}
            inlet
            style={{ marginRight: 240 }}
          />
          <ChevronRightIcon />
        </ListItem>

        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <Typography style={{ marginRight: 135 }}>
              Office Number
              </Typography>
          </ListItemIcon>
          <ListItemText
            primary={`${user.office}`}
            inlet
            style={{ marginRight: 240 }}
          />
          <ChevronRightIcon />
        </ListItem>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" align="center">Update Profile</DialogTitle>
          <DialogContent dividers>
            <FormControl component="fieldset">
              <FormLabel component="legend" required>Salutation</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="Mr" control={<Radio color="primary" />} label="Mr" />
                <FormControlLabel value="Mrs" control={<Radio color="primary" />} label="Mrs" />
                <FormControlLabel value="Ms" control={<Radio color="primary" />} label="Ms" />
                <FormControlLabel value="Mdm" control={<Radio color="primary" />} label="Mdm" />
                <FormControlLabel value="Dr" control={<Radio color="primary" />} label="Dr" />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={3} p={3}>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="firstname"
                  label="First Name"
                  value={`${user.firstName}`}
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
                  id="lastname"
                  label="Last Name"
                  value={`${user.lastName}`}
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
                  id="hp"
                  label="Contact Number (HP)"
                  value={`${user.hp}`}
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
                  id="office"
                  label="Contact Number (Office)"
                  value={`${user.office}`}
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
                  id="email"
                  label="Email Address"
                  value={`${user.email}`}
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
            <Button onClick={handleChangeSuccessDialog} color="primary">
              Update
          </Button>
          </DialogActions>
        </Dialog>

        <Dialog onClose={handleCloseSuccessDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
          <DialogTitle2 align='center' id="customized-dialog-title" onClose={handleCloseSuccessDialog} style={{ backgroundColor: green[500] }}>
            SUCCESS
        </DialogTitle2>
          <DialogContent2 dividers>
            <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
            <Typography>
              Your profile has been updated sucessfully
          </Typography>
          </DialogContent2>
        </Dialog>

      </List>
    </Paper>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
