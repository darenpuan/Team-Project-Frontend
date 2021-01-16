import React, { useState } from 'react';
import {
Container,
Grid,
makeStyles,
Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import ViewAcc from './ViewAcc';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));



const AdminViewAcc = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="View Account"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Box mt={3}>
          <ViewAcc />
        </Box>
      </Container>
    </Page>
  );
};

export default AdminViewAcc;
