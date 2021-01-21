import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import Controls from "src/components/controls/Controls";
import { useForm, Form } from 'src/components/useForm';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
    fill: 'white'
  },
  pad: {
    padding: 0,
    '&:first-child': {
      padding:0

    },
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.info.main,
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: 'white',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    alignContent: 'center',
  },
}))(MuiDialogActions);



const salutationItems = [
  { id: 'mr', title: 'Mr' },
  { id: 'mrs', title: 'Mrs' },
  { id: 'ms', title: 'Ms' },
  { id: 'mdm', title: 'Mdm' },
  { id: 'dr', title: 'Dr' },
]

const initialFValues = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  office: '',
  salutation: 'mr',
  accountType: '',
  department: ''
}


const DialogTitle1 = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent1 = withStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    textAlign: "center",
    width: '600px',
    height: '360px'
  },
}))(MuiDialogContent);

export default function AccForm(props) {
  const classes = useStyles();
  const { addOrEdit, recordForEdit } = props
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleOpenSuccessDialog = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
  };
  const handleChangeSuccessDialog = () => {
    setOpen(false);
    setOpenSuccess(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required."
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 7 ? "" : "Minimum 8 numbers required."
    if ('office' in fieldValues)
      temp.office = fieldValues.office.length > 7 ? "" : "Minimum 8 numbers required."
    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const [accountType, setAccountType] = React.useState('');
  const handleAccountChange = (event) => {
    setAccountType(event.target.value);
  }

  const [departmentType, setDepartmentType] = React.useState('');
  const handleDepartmentType = (event) => {
    setDepartmentType(event.target.value);
  }


  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  }

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit
      })
  }, [recordForEdit])

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      NEW ACCOUNT
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={'true'} maxWidth={'md'}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography align='center'>
          NEW ACCOUNT
        </Typography>
        </DialogTitle>
    <Form onSubmit={handleSubmit}>
      <Grid container justify="center">
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-controlled-select-label">Account Type</InputLabel>
          <Select
            labelId="demo-controlled-select-label"
            id="demo-controlled-select"
            value={accountType}
            onChange={handleAccountChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Staff"}>Staff</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-simple-select-required-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={departmentType}
            onChange={handleDepartmentType}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Booking System"}>Booking System</MenuItem>
            <MenuItem value={"Workflow"}>Workflow</MenuItem>
            <MenuItem value={"Weighing Scale"}>Weighing Scale</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <Grid container xs={12} justify="center">
          <Controls.RadioGroup
            name="salutation"
            label="Salutation *"
            value={values.salutation}
            onChange={handleInputChange}
            items={salutationItems}
          />
          <Grid container xs={12} justify="center">
          <Controls.Input
            name="firstName"
            label="Employee First Name"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          <Controls.Input
            name="lastName"
            label="Employee Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
          <Controls.Input
            name="email"
            label="Employee Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Employee Contact Number"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="office"
            label="Employee Office Number"
            value={values.office}
            onChange={handleInputChange}
            error={errors.office}
          />
        </Grid>


          <Grid container justify="center">
            <Controls.Button
              type="submit"
              text="Submit"
              onClick={handleChangeSuccessDialog}
            />
          </Grid>
        </Grid>
      </Grid>
    </Form>
      </Dialog>


      <Dialog onClose={handleCloseSuccessDialog} aria-labelledby="customized-dialog-title" open={openSuccess} >
        <DialogTitle1 align='center' id="customized-dialog-title" onClose={handleCloseSuccessDialog} style={{ backgroundColor: green[500] }}>
        SUCCESS
        </DialogTitle1>
        <DialogContent1 dividers>
          <CheckCircleIcon style={{ fontSize: 200, color: green[500] }} />
          <Typography>
          Your Booking Reference No. is: 627301
          </Typography>
        </DialogContent1>
      </Dialog>
      </div>
  )
}
