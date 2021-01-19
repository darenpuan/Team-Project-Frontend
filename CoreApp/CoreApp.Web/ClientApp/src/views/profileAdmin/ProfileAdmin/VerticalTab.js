import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import SecurityIcon from '@material-ui/icons/Security';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails'
import PinChange from './PinChange'
import PassChange from './PassChange'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 495,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Profile />
        <Tab label={<div style={{ alignItems:'left' }}><PersonIcon style={{ verticalAlign: 'middle', fontSize: 'small'}} /> Personal Info </div>} {...a11yProps(1)} />
        <Tab label={<div><SecurityIcon style={{ verticalAlign: 'middle', fontSize: 'small' }} /> Password Change </div>} {...a11yProps(2)} />
        <Tab label={<div><SecurityIcon style={{ verticalAlign: 'middle', fontSize: 'small'}} /> Pin Change </div>} {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfileDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PassChange />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PinChange />
      </TabPanel>
    </div>
  );
}
