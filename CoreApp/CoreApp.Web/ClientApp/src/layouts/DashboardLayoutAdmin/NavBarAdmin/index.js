import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
Avatar,
Box,
Divider,
Drawer,
Hidden,
List,
Typography,
makeStyles,
Grid
} from '@material-ui/core';

import {
  Dashboard as DashboardIcon,
  EventNote as EventNoteIcon,
  LocalShipping as LocalShippingIcon,
  ListAlt as ListAltIcon,
  People as PeopleIcon,
  Event as EventIcon,
} from '@material-ui/icons';

import NavItem from './NavItem';

import { AccountMenu } from './AccountMenu';

const user = {
  jobTitle: 'Administrator',
  name: 'John Doe'
};

const items = [
  {
    href: '/app/adminSummary',
    icon: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/adminViewBooking',
    icon: EventNoteIcon,
    title: 'Booking'
  },
  {
    href: '/app/adminCargo',
    icon: LocalShippingIcon,
    title: 'Cargo Summary'
  },
  {
    href: '/app/adminViewOrder',
    icon: ListAltIcon,
    title: 'Order List'
  },
  {
    href: '/app/adminViewAcc',
    icon: PeopleIcon,
    title: 'Account Management'
  },
  {
    href: '/app/adminViewPH',
    icon: EventIcon,
    title: 'Public Holiday'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >

        <Grid container direction="row">
        

          <Grid item sm={12}>
            <Grid container direction="row" alignItems="center" justify="center" spacing={0} style={{ paddingTop: '10px' }}>
              <Grid item sm={9}>
                <Typography
                  className={classes.name}
                  color="textPrimary"
                  variant="h5"
                >
                  {user.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  {user.jobTitle}
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <AccountMenu />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
