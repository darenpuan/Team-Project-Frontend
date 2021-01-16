import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import data from './data';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Grid
          container
        >
          <Grid item sm={12}>
            <Results customers={customers} />
          </Grid>

          <Grid item sm={12} />
        </Grid>

      </Container>
    </Page>
  );
};

export default CustomerListView;
