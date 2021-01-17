import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {
  Box,
  Container,
  Link,
  Typography,
  makeStyles,
  Grid,
  Button,
} from '@material-ui/core';
import {
  Send as SendIcon,
  ClearAll as ClearAllIcon,
  Rotate90DegreesCcw,
  RotateLeft,
  Rotate90DegreesCcwOutlined,
} from '@material-ui/icons';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  headerCard: {
    backgroundColor: '#2196F3',
  },
  cardConfig: {
    "&:last-child": {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0
    },
  },
  contentWrapper: {
    "&:last-child": {
      paddingLeft: 25,
      paddingRight: 25
    }
  },
  logoClass: {
    marginTop: 20,
    marginBottom: 20
  },
  gridNoPad: {
    padding: 0
  },
  iconStyle: {
    width: 200,
    height: 200,
  }
}));

const RegisterAfter = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        borderRadius={16}
      >
        <Container
          maxWidth="sm">
          <Card
            maxWidth="sm">
            <CardContent className={classes.cardConfig}>
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                mb={2}
                className={classes.headerCard}>
                <Logo
                  className={classes.logoClass} />
              </Box>
              <Box
                className={classes.contentWrapper}>
                <Box mb={3}
                  display="flex"
                  width="100%"
                  justifyContent="center">
                  <Typography
                    color="textPrimary"
                    align="center"
                    variant="h5">
                    Thank you for registering an account! Please wait 2-3 working days for us to approve your account. You will receive an email with an auto-generated password once approved.
                  </Typography>
                </Box>
                <Box mb={3}
                  display="flex"
                  width="100%"
                  justifyContent="center">
                  <ClearAllIcon
                    className={classes.iconStyle} />
                  <SendIcon
                    className={classes.iconStyle}/>
                </Box>
              </Box>

              <Box my={2}
                display="flex"
                justifyContent="center">
                <Button
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  align="center"
                >
                  Register
                  </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterAfter;
