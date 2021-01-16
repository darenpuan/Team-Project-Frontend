import React from 'react';
import
{
  Container,
  Grid,
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import AdminSummary from './AdminSummary';
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
      title="Admin Summary"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
        <Box
          display="flex"
          justifyContent="flex-end"
          mb={3}
        >
        </Box>
        <Grid
          container
        >
          <Grid item sm={12}>
            <AdminSummary />
          </Grid>

          <Grid item sm={12} />
        </Grid>



      </Container>
    </Page>
  );
};

export default Dashboard;
