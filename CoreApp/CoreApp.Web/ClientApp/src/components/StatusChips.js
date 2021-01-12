// @ts-check

import { Chip, colors } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// completed status chip
export const CompletedChip = withStyles((theme) => ({
  root: {
    color: colors.green[600],
    borderColor: colors.green[100]
  },
}))(Chip);

// aaproved status chip
export const ApprovedChip = withStyles((theme) => ({
  root: {
    color: colors.green[600],
    borderColor: colors.green[100]
  },
}))(Chip);

// active status chip
export const ActiveChip = withStyles((theme) => ({
  root: {
    color: colors.green[600],
    borderColor: colors.green[100]
  },
}))(Chip);

// uncompleted status chip
export const UnCompletedChip = withStyles((theme) => ({
  root: {
    color: colors.red[600],
    borderColor: colors.red[100]
  },
}))(Chip);

// rejected status chip
export const RejectedChip = withStyles((theme) => ({
  root: {
    color: colors.red[600],
    borderColor: colors.red[100]
  },
}))(Chip);

// suspended status chip
export const SuspendedChip = withStyles((theme) => ({
  root: {
    color: colors.red[600],
    borderColor: colors.red[100]
  },
}))(Chip);

//  pending status chip
export const PendingChip = withStyles((theme) => ({
  root: {
    color: colors.orange[600],
    borderColor: colors.orange[100]
  },
}))(Chip);

//  in transit status chip
export const TransitChip = withStyles((theme) => ({
  root: {
    color: colors.orange[600],
    borderColor: colors.orange[100]
  },
}))(Chip);

//  in progress status chip
export const ProgressChip = withStyles((theme) => ({
  root: {
    color: colors.orange[600],
    borderColor: colors.orange[100]
  },
}))(Chip);


