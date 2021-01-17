import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  radioWrapper: {
    marginBottom: "3%",
    marginLeft: "2%"
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('mr');
  const classes = useStyles();


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.radioWrapper}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Salutation &#42;</FormLabel>
      <RadioGroup aria-label="salutation" name="salutation" value={value} onChange={handleChange} row>
        <FormControlLabel value="mr" control={<StyledRadio />} label="Mr" />
        <FormControlLabel value="mrs" control={<StyledRadio />} label="Mrs" />
        <FormControlLabel value="ms" control={<StyledRadio />} label="Ms" />
        <FormControlLabel value="mdm" control={<StyledRadio />} label="Mdm" />
        <FormControlLabel value="dr" control={<StyledRadio />} label="Dr" />
      </RadioGroup>
      </FormControl>
    </Box>
  );
}
