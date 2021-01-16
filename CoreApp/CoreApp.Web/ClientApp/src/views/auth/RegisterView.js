import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import {
  KeyboardArrowLeft as KeyboardArrowLeft,
} from '@material-ui/icons';

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
  }
}));

const RegisterView = () => {
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
                  display="flex"
                  maxWidth="10%"
                justifyContent="start"
              >
                  <KeyboardArrowLeft />
                  <Typography
                    color="textPrimary"
                    variant="h6"
                  >
                    Back
                          </Typography>
                </Box>
              <Box mb={3}
                display="flex"
                width="100%"
                justifyContent="center">
                <Typography
                  color="textPrimary"
                  variant="h4">
                  Registration
                        </Typography>
              </Box>
              <Box
                className={classes.contentWrapper}>
                <Formik
                  initialValues={{
                    email: 'staff@cloudplus.com.sg',
                    password: 'p@as$w0rd'
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                  })}
                  onSubmit={() => {
                    navigate('/app/analytics', { replace: true });
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values
                  }) => (
                      <form onSubmit={handleSubmit}>
                        
                      </form>
                    )}
                </Formik>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
