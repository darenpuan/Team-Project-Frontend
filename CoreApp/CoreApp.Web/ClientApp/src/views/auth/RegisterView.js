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
  makeStyles,
  Grid,
} from '@material-ui/core';

import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import RadioButtonsGroup from './RadioButtonsGroup.js'
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
  },
  tbCustom: {
    marginTop: 3,
    marginBottom: 3
  },
  gridNoPad:{
    padding:0
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
                    
                  }}
                  //validationSchema={Yup.object().shape({
                  //  firstName: Yup.string().required('First Name is required'),
                  //  lastName: Yup.string().required('Last Name is required'),
                  //  hpContact: Yup.string().required('Contact Number (HP) is required'),
                  //  officeContact: Yup.string().required('Contact Number (Office) is required'),
                  //  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  //  companyName: Yup.string().max(255).required('Company Name is required'),
                  //  //password: Yup.string().max(255).required('Password is required')
                  //})}
                  onSubmit={() => {
                    navigate('/registerCompany', { user: 'Lucy' });
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
                        <Box
                          mt={3}
                          mb={3}
                        />
                        <Grid container spacing={1}>
                          <RadioButtonsGroup/>
                          <Grid item xs={6}>
                            <TextField 
                              error={Boolean(touched.firstName && errors.firstName)}
                              className={classes.tbCustom}
                              fullWidth
                              helperText={touched.firstName && errors.firstName}
                              label="First Name"
                              name="firstName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              error={Boolean(touched.lastName && errors.lastName)}
                              className={classes.tbCustom}
                              fullWidth
                              helperText={touched.lastName && errors.lastName}
                              label="Last Name"
                              name="lastName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              error={Boolean(touched.hpContact && errors.hpContact)}
                              fullWidth
                              helperText={touched.hpContact && errors.hpContact}
                              label="Contact Number (HP)"
                              className={classes.tbCustom}
                              name="hpContact"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              error={Boolean(touched.officeContact && errors.officeContact)}
                              fullWidth
                              helperText={touched.officeContact && errors.officeContact}
                              label="Contact Number (Office)"
                              className={classes.tbCustom}
                              name="officeContact"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={Boolean(touched.email && errors.email)}
                              fullWidth
                              helperText={touched.email && errors.email}
                              label="Email Address"
                              className={classes.tbCustom}
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="email"
                              variant="outlined"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              error={Boolean(touched.companyName && errors.companyName)}
                              fullWidth
                              helperText={touched.companyName && errors.companyName}
                              label="Company Name"
                              className={classes.tbCustom}
                              name="companyName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                          </Grid>
                        </Grid>

                        <Box my={2}>
                          <Button
                            color="primary"
                            disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                          >
                            Next
                  </Button>
                        </Box>
                        <Box
                          display="flex"
                          width="100%"
                          justifyContent="center">
                          <Link
                            component={RouterLink}
                            to="/login"
                            variant="h6"
                            color="textSecondary"
                          >
                            Login to existing account
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

export default RegisterView;
