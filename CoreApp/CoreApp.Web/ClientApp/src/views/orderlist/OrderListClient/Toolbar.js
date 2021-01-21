import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  colors,
  Grid
} from '@material-ui/core';
import NewOrderList from './NewOrderList';
import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import { FilterButton } from 'src/components/Buttons';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  filterButton: {
    '&:hover': {
      color: colors.common.white
    }
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={3}>
        <Card>
          <CardContent>
            <div style={{ width: '100%' }}>
              <Box display="flex">
                <Grid container spacing={1} alignItems="flex-end">

                <Grid item>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            fontSize="small"
                            color="action"
                          >
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="Search product"
                    variant="standard"
                  />
                </Grid>
                <Grid item mr={2}>
                  <FilterButton variant="contained">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <FilterIcon className={classes.filterButton} />
                    </SvgIcon>&nbsp;&nbsp;Filter
              </FilterButton>
                  </Grid>
                  </Grid>
                <Grid container display="flex" justify="flex-end">
                  <NewOrderList />
                </Grid>
              </Box>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
