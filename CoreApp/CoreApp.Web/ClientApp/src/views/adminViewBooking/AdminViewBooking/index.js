import React, { useState } from 'react';
import {
Container,
Grid,
makeStyles,
Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import Viewbooking from './Viewbooking';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));



const AdminViewBooking = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="View Booking"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Box mt={3}>
          <Viewbooking />
        </Box>
      </Container>
    </Page>
  );
};

export default AdminViewBooking;
