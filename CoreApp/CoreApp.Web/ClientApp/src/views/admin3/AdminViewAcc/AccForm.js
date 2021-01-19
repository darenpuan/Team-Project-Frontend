import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import Controls from "src/components/controls/Controls";
import { useForm, Form } from 'src/components/useForm';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SuccessNewAcc from './successNewAcc';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
  },
}));

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

export default function AccForm(props) {
  const classes = useStyles();
  const [accountType, setAccountType] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const { addOrEdit, recordForEdit } = props
  const [open, setOpen] = React.useState(false);

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

  const handleChange = (event) => {
    setAccountType(event.target.value);
    setDepartment(event.target.value);
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

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
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-controlled-select-label">Account Type</InputLabel>
          <Select
            labelId="demo-controlled-select-label"
            id="demo-controlled-select"
            value={accountType}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Customer"}>Customer</MenuItem>
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
            value={department}
            onChange={handleChange}
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

        <Grid item xs={12}>
          <Controls.RadioGroup
            name="salutation"
            label="Salutation *"
            value={values.salutation}
            onChange={handleInputChange}
            items={salutationItems}
          />
        <Grid item xs={12}>
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


          <div>
            <Controls.Button
              type="submit"
              text="Submit"
              onClick={handleClickOpen}
            />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <SuccessNewAcc />
              </DialogContent>
            </Dialog>


            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}
