import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import
{
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/admin/adminSummary">
            <Logo />
          </RouterLink>
        </Hidden>
        <Hidden lgUp>
          <Box flexGrow={1} />
          <RouterLink to="/admin/adminSummary">
            <Logo />
          </RouterLink>
        </Hidden>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit" component={RouterLink} to="/404">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={RouterLink} to="/login">
            <InputIcon />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
