import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
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
  gridNoPad: {
    padding: 0
  }
}));

const RegisterCompany = () => {
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
                  validationSchema={Yup.object().shape({
                   
                  })}
                  onSubmit={async (values, { setSubmitting }) => {      
                    var jsonData = {
                      salutation: localStorage.getItem("salutation"),
                      firstName: localStorage.getItem("firstName"),
                      lastName: localStorage.getItem("lastName"),
                      contactnumber: localStorage.getItem("hpContact"),
                      officenumber: localStorage.getItem("officeContact"),
                      email: localStorage.getItem("email"),
                      companyName: localStorage.getItem("companyName"),
                      address: values.addressNickname,
                      street: values.street,
                      apartment: values.apartment,
                      town: values.town,
                      country: values.country,
                      postalcode: values.companyPostalCode
                    }
                    const res = await fetch(`https://localhost:5001/api/User/Register`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(jsonData)
                    }).then(response => response.json());
                    if (res["proceed"] === true) {
                      navigate('/registerAfter', { replace: true });
                    }
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
                            <TextField
                              error={Boolean(touched.addressNickname && errors.addressNickname)}
                              className={classes.tbCustom}
                              fullWidth
                              helperText={touched.addressNickname && errors.addressNickname}
                              label="Address Nickname"
                              name="addressNickname"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                            <TextField
                              error={Boolean(touched.street && errors.street)}
                              className={classes.tbCustom}
                              fullWidth
                              helperText={touched.street && errors.street}
                              label="Street"
                              name="street"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                            <TextField
                              error={Boolean(touched.apartment && errors.apartment)}
                              fullWidth
                              helperText={touched.apartment && errors.apartment}
                              label="Apartment"
                              className={classes.tbCustom}
                              name="apartment"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                            <TextField
                              error={Boolean(touched.town && errors.town)}
                              fullWidth
                              helperText={touched.town && errors.town}
                              label="Town"
                              className={classes.tbCustom}
                              name="town"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                        />
                        <Grid container spacing={1}>
                          <Grid item xs>
                            <TextField
                              error={Boolean(touched.country && errors.country)}
                              fullWidth
                              helperText={touched.country && errors.country}
                              label="Country"
                              className={classes.tbCustom}
                              name="country"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              variant="outlined"
                              required
                            />
                          </Grid>
                          <Grid item xs>
                            <TextField
                              error={Boolean(touched.postal && errors.postal)}
                              fullWidth
                              helperText={touched.postal && errors.postal}
                              label="Postal Code"
                              className={classes.tbCustom}
                              name="companyPostalCode"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="number"
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
                            Register
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

export default RegisterCompany;
