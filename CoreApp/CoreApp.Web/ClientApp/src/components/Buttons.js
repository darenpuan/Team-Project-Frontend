import { Button, colors } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Create own custom button in this js file

// Standardised Ok Button
export const OkButton = withStyles((theme) => ({
  root: {
    color: colors.common.white,
    backgroundColor: colors.teal[400],
    '&:hover': {
      backgroundColor: colors.teal[800]
    },
  },
}))(Button);

// Standardised Cancel button
export const CancelButton = withStyles((theme) => ({
  root: {
    color: colors.common.white,
    backgroundColor: colors.red[400],
    '&:hover': {
      backgroundColor: colors.red[800]
    },
  },
}))(Button);

// Standardised  Action button e.g. Rescan
export const ActionButton = withStyles((theme) => ({
  root: {
    color: colors.common.white,
    backgroundColor: colors.orange[400],
    '&:hover': {
      backgroundColor: colors.orange[800]
    },
  },
}))(Button);
