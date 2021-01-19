import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import VerticalTab from './VerticalTab'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Profile Information"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          direction="column"
        >
          <Grid
            item
            xs={12}
            container
          >
            <Grid item xs={12}>
              <VerticalTab />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
