import React, { useState } from 'react';
import {
Container,
Grid,
makeStyles,
Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import CargoSummary from './CargoSummary';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));



const AdminCargo = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Cargo Summary"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Box mt={3}>
          <CargoSummary />
        </Box>
      </Container>
    </Page>
  );
};

export default AdminCargo;
