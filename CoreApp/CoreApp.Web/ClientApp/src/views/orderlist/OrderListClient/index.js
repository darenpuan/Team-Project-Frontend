import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import CustomerOrders from './CustomerOrders';
import BreadCrumb from './BreadCrumb';
import Employees from 'src/pages/Employees/Employees'
import EmployeeForm from 'src/pages/Employees/EmployeeForm'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Customer Order List"
    >

      <Container maxWidth={false}>
              <BreadCrumb />
          <Grid
            container
            spacing={0}
          >
          <Grid item sm={12}>
            <CustomerOrders />
            </Grid>
          </Grid>
      </Container>
    </Page>
  );
};

export default ProductList;
