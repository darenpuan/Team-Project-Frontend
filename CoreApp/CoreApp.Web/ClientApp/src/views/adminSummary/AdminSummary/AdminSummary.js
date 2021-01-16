import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import {  ActionButton  } from 'src/components/Buttons';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AdminSummary = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        colors.green[500],
        colors.orange[600],
        colors.red[600],
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Active',
      'Pending',
      'Suspended'
    ]
  };


  const options = {
    layout: { padding: 0 },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
     <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Account Summary"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Pie
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <ActionButton variant="contained" size="lg" color="#ff5c5c" className={classes.exportButton}>
          rescan
        </ActionButton>


      </Box>
    </Card>
       
  );
};

AdminSummary.propTypes = {
  className: PropTypes.string
};

export default AdminSummary;

