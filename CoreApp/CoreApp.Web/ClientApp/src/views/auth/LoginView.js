import React from 'react';
import { Link as RouterLink, Router, useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
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
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Login"
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
              <Formik
                initialValues={{
                    email: 'test1@gmail.com',
                    password: 'qwerty1'
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
                })}
                  onSubmit={async (values, { setSubmitting }) => {
                    const res = await fetch(`https://localhost:5001/api/User/Authenticate?email=${values.email}&password=${values.password}`, {
                      method: 'POST',
                    }).then(response => response.json());
                    navigate(res["to"], { replace: true });
                  }
                  }
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
                      <Box mb={3}
                        display="flex"
                        width="100%"
                        justifyContent="center">
                        <Typography
                          color="textPrimary"
                          variant="h4">
                          Login
                        </Typography>
                      </Box>
                      <Box
                        mt={3}
                        mb={3}
                      />
                      <TextField
                        error={Boolean(touched.email && errors.email)}
                        fullWidth
                        helperText={touched.email && errors.email}
                        label="Email Address"
                        margin="normal"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="email"
                        value={values.email}
                        variant="outlined"
                      />
                      <TextField
                        error={Boolean(touched.password && errors.password)}
                        fullWidth
                        helperText={touched.password && errors.password}
                        label="Password"
                        margin="normal"
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        variant="outlined"
                      />
                      <Box my={2}>
                        <Button
                          color="primary"
                          disabled={isSubmitting}
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Login
                  </Button>
                      </Box>
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="center">
                        <Link
                          component={RouterLink}
                          to="/register"
                        variant="h6"
                        color="textSecondary"
                        >
                          Register an Account
                        </Link>
                      </Box>
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

export default LoginView;
