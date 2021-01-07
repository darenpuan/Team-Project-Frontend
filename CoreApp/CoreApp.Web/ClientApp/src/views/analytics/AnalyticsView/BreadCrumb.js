import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4)
  },
}),);

/**
 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event
 */
function handleClick(event) {
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" component={RouterLink} to="/app/dashboard" onClick={handleClick}>
          Home
        </Link>
        <Link
          color="textPrimary"
          component={RouterLink}
          to=""
          onClick={handleClick}
          aria-current="page"
        >
          Analytics
        </Link>
      </Breadcrumbs>
      <Divider />
    </div>
  );
}
