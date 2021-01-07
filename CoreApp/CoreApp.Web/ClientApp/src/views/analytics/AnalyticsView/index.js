import React from 'react';
import
{
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import BreadCrumb from 'src/views/analytics/AnalyticsView/BreadCrumb';
import Sales from './Sales';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Analytics = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={2}
        >

          <Grid item sm={12}>
            <BreadCrumb />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
        >
          <Grid item sm={12} md={6}>
            <Sales />
          </Grid>

          <Grid item sm={12} md={6}>
            <TrafficByDevice />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Analytics;
