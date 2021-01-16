import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <Typography variant="caption" color="textPrimary">
          NEED FURTHER ASSISTANCE?
          </Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Contact Number" secondary="+(65) 1234-5678" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email Address" secondary="Example123@gmail.com" />
      </ListItem>
    </List>
  );
}
