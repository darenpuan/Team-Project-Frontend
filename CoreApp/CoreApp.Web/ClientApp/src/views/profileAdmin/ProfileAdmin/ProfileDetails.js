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
import Paper from '@material-ui/core/Paper';


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

  const user = {
    email: 'JohnDoe@cloudplus.com',
    salutation: "Mr ",
    hp: "+(65) 9123 5678",
    office: "+(65) 6123 5678",
    name: 'John Doe',
    timezone: 'GMT+8'
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
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
      </ListSubheader>
        }
        className={classes.mylist}
      >
        <ListItem button>
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

        <ListItem button>
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

        <ListItem button>
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

        <ListItem button>
          <ListItemIcon>
            <Typography style={{ marginRight: 137 }}>
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
      </List>

    </Paper>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
