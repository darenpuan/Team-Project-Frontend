import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const user = {
  email: 'JohnDoe@cloudplus.com',
  salutation: "Mr ",
  hp: "+(65) 9123 5678",
  office: " +(65) 6123 5678",
  name: 'John Doe',
  timezone: 'GMT+8'
};

const useStyles = makeStyles(() => ({
  root: {},
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="h6"
          >
            {`${user.email}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
