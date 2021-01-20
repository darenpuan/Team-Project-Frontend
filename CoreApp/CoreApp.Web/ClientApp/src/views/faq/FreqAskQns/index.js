import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Accordion from './Accordion';
import ContactList from './ContactList';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import BreadCrumb from './BreadCrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SettingsView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="F.A.Q"
    >
      <Container maxWidth={false}>
        <BreadCrumb />
      <Grid container justify="center" alignItems="center">
        <Card style={{ width: "95%" }} >
          <CardContent>
            <Box fontFamily="Roboto" p={3} fontSize="h2.fontSize">
              Frequently Asked Questions
            </Box>
            <Box display="flex" p={2}>
              <Box p={1}>
                <Accordion />
              </Box>
              <Box p={1} maxWidth="sm" alignItems="center">
                <ContactList />
              </Box>
            </Box>
            </CardContent>
        </Card>
        </Grid>
      </Container>
    </Page>
  );
};

export default SettingsView;
