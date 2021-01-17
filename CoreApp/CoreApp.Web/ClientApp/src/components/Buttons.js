import { Button, colors } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Create own custom button in this js file

// Standardised Ok Button
export const OkButton = withStyles((theme) => ({
  root: {
    color: colors.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[800]
    },
  },
}))(Button);

// Standardised Cancel button
export const CancelButton = withStyles((theme) => ({
  root: {
    color: colors.common.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[800]
    },
  },
}))(Button);

// Standardised  Action button e.g. Rescan
export const ActionButton = withStyles((theme) => ({
  root: {
    color: colors.common.white,
    backgroundColor: colors.blue[600],
    '&:hover': {
      backgroundColor: colors.blue[800]
    },
  },
}))(Button);

// Standardised  Filter button e.g. Filter
export const FilterButton = withStyles((theme) => ({
  root: {
    color: colors.common.black,
    backgroundColor: colors.grey[300],

    '&:hover': {
      color: colors.common.white,
      backgroundColor: colors.grey[600]
    },
  },
}))(Button);
