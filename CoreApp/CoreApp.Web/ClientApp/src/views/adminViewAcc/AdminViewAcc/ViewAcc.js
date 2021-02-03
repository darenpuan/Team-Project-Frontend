import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { ViewAgenda } from '@material-ui/icons';
import Controls from "src/components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AccForm from './AccForm';
import AccConfi from './AccConfi';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Popup from 'src/components/Popup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  makeStyles,
  InputAdornment,
  SvgIcon,
  Grid,
  TextField,
  colors
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
  Search as SearchIcon,
  Filter as FilterIcon
} from 'react-feather';

import { FilterButton } from 'src/components/Buttons';
import { ActiveChip, PendingChip, SuspendedChip } from 'src/components/StatusChips';

const data = [
  {
    user: 'Patrick Newman',
    role: 'Customer',
    email: 'patrick@soft.com',
    phone: '9123 4567',
    company: "Soft Pte Ltd",
    verified: "Email",
    lastLogin: "12/22/2020",
    status: 'Pending'
  },
  {
    user: 'Muhammad Ali',
    role: 'Adminstrator',
    email: 'ali@medhub.com',
    phone: '9123 4567',
    company: "Medhub Pte Ltd",
    verified: "Email",
    lastLogin: "12/22'2020",
    status: 'Active'
  },
  {
    user: 'Teo Teck Meng, Benjamin',
    role: 'Staff',
    email: 'benjamin@medhub.com',
    phone: '9123 4567',
    company: "Medhub Pte Ltd",
    verified: "Email",
    lastLogin: "10/24/2020",
    status: 'Suspended'
  },
  {
    user: 'Saravanan S/O Thirumasan',
    role: 'Customer',
    email: 'thirumasan@infosys.com',
    phone: '9123 4567',
    company: "Infomation Pte Ltd",
    verified: "Email",
    lastLogin: "12/22/2020",
    status: 'Pending'
  },
  {
    user: 'Alexander Mc',
    role: 'Customer',
    email: 'alexander@git.com',
    phone: '9123 4567',
    company: "Git Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Active'
  },
  {
    user: 'Brad Pit',
    role: 'Customer',
    email: 'brad@kpmg.com',
    phone: '9123 4567',
    company: "KPMG Pte Ltd",
    verified: "Email",
    lastLogin: 1603000800000,
    status: 'Pending'
  },
];

const useStyles = makeStyles(() => ({
  root: {},
  newButton: {
    width:'100%'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  filterButton: {
    '&:hover': {
      color: colors.common.white
    }
  }
}));

//in progress
const headers = [
  { name: "Email", field: "email", sortable: true },
  { name: "RefNo", field: "refNo", sortable: false },
  { name: "CargoName", field: "cargoName", sortable: false },
  { name: "CreatedAt", field: "createAt", sortable: true },
  { name: "Download", field: "download", sortable: false },
  { name: "Status", field: "status", sortable: false }
]

//sort in progress
const Header = ({ headers, onSorting }) => {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");
  const onSortingChange = field => {
    const order = field === sortingField && sortingField === "asc" ? "desc" : "asc";
    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  }

  return (
    <thread>
      <tr>
        {headers.map(({ name, field, sortable }) => (
          <th key={name}
            onclick={() => sortable ? onSortingChange(field) : null}
          >{name}
            {
              sortingField && sortingField === field && (
                <ViewAgenda icon={sortingOrder === "asc" ? "arrow-down" : "arrow-up"}
                />
              )
            }
          </th>
        ))}
      </tr>
    </thread>
  );
};
//end of sort

const ViewAcc = ({ className, ...rest }) => {
  const classes = useStyles();
  const [views] = useState(data);
  const [search, setSearch] = useState(data);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [sorting, setSorting] = useState({ field: "", order: "" }); //sort
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);


  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //user, role, email, , company, status
  const handleSearch = event => {
    const items = views.filter((data) => {
      return data.user.toLowerCase().includes(event.target.value.toLowerCase()) || data.role.toLowerCase().includes(event.target.value.toLowerCase()) || data.email.toLowerCase().includes(event.target.value.toLowerCase()) || data.company.toLowerCase().includes(event.target.value.toLowerCase()) || data.status.toLowerCase().includes(event.target.value.toLowerCase())
    })

    setSearch(items);
  }

  const handleActive = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.user.toLowerCase().includes("active") || data.role.toLowerCase().includes("active") || data.email.toLowerCase().includes("active") || data.company.toLowerCase().includes("active") || data.status.toLowerCase().includes("active")
    })

    setSearch(items);
  }

  const handlePending = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.user.toLowerCase().includes("pending") || data.role.toLowerCase().includes("pending") || data.email.toLowerCase().includes("pending") || data.company.toLowerCase().includes("pending") || data.status.toLowerCase().includes("pending")
    })

    setSearch(items);
  }

  const handleSuspended = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.user.toLowerCase().includes("suspended") || data.role.toLowerCase().includes("suspended") || data.email.toLowerCase().includes("suspended") || data.company.toLowerCase().includes("suspended") || data.status.toLowerCase().includes("suspended")
    })

    setSearch(items);
  }

  const handleAll = event => {
    setAnchorEl(null);
    const items = views.filter((data) => {
      return data.user.toLowerCase().includes(" ") || data.role.toLowerCase().includes(" ") || data.email.toLowerCase().includes(" ") || data.company.toLowerCase().includes(" ") || data.status.toLowerCase().includes(" ")
    })

    setSearch(items);
  }

  //sorting
  if (sorting.field) {
    const reversed = sorting.order === "asc" ? 1 : -1;
    ViewAcc = ViewAcc.sort(
      (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader title="View Account" />
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <SvgIcon
                  fontSize="small"
                  color="action"
                >
                  <SearchIcon />
                </SvgIcon>
              </Grid>
              <Grid item >
                <TextField
                  id="input-with-icon-grid"
                  label="Search for all columns"
                  onChange={handleSearch}
                />
              </Grid>
              <Grid item >
                <FilterButton variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <FilterIcon className={classes.filterButton} />
                  </SvgIcon>&nbsp;&nbsp;Filter
              </FilterButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >

                  <MenuItem onClick={handleAll}>All</MenuItem>
                  <MenuItem onClick={handleActive}>Active</MenuItem>
                  <MenuItem onClick={handlePending}>Pending</MenuItem>
                  <MenuItem onClick={handleSuspended}>Suspended</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Box>
          <Box p={1}>
            <AccForm/>
          </Box>
        </Box>

        <Divider />
        <PerfectScrollbar>
          <Box minWidth={1100}>
            <Table>
              <TableHead headers={headers} >
                <TableRow>
                  <TableCell>
                    User
                 </TableCell>
                  <TableCell>
                    Role
                </TableCell>
                  <TableCell>
                    Email
                </TableCell>
                  <TableCell>
                    Phone
                </TableCell>
                  <TableCell>
                    Company
                </TableCell>
                  <TableCell>
                    Last Login
                </TableCell>
                  <TableCell>
                    Status
                </TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {search.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((view) => (
                  <TableRow
                    hover
                    key={view.id}
                  >
                    <TableCell>
                      {view.user}
                    </TableCell>
                    <TableCell>
                      {view.role}
                    </TableCell>
                    <TableCell>
                      {view.email}
                    </TableCell>
                    <TableCell>
                      {view.phone}
                    </TableCell>
                    <TableCell>
                      {view.company}
                    </TableCell>
                    <TableCell>
                      {moment(view.lastLogin).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      {view.status === 'Active' ? (
                        <ActiveChip
                          label={view.status}
                          size="small"
                          variant="outlined"
                        />
                      )
                        : null}
                      {
                        view.status === 'Pending' ? (
                          <PendingChip
                            label={view.status}
                            size="small"
                            variant="outlined"
                          />
                        )
                          : null
                      }
                      {
                        view.status === 'Suspended' ? (
                          <SuspendedChip
                            label={view.status}
                            size="small"
                            variant="outlined"
                          />
                        )
                          : null
                      }
                    </TableCell>
                    <TableCell>
                      <AccConfi />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={views.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
        />
      </Card>
    </>
  );
};

ViewAcc.propTypes = {
  className: PropTypes.string
};

export default ViewAcc;
