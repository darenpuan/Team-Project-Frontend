import React from 'react';
import {
Container,
Grid,
makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import LatestOrders from 'src/views/bookingLayoutCustomer/BookingLayoutView/LatestOrders';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Grid
          container
        >
          <Grid item sm={12}>
            <LatestOrders />
          </Grid>

          <Grid item sm={12} />
        </Grid>

      </Container>
    </Page>
  );
};

export default Dashboard;
