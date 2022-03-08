import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import * as moment from 'moment';
import { API_URL } from '../../config/config';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { FormControlLabel, IconButton } from '@mui/material';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, TextareaAutosize, MenuItem, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const api_status = [
  { value: '0', label: 'Disabled' },
  { value: '1', label: 'Enabled' },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MatEdit = ({ index }) => {
  const handleEditClick = () => {
    console.log(index);
  };

  return (
    <FormControlLabel
      control={
        <IconButton color="primary" aria-label="Edit Record" onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      }
      label=""
    />
  );
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'username', headerName: 'User Name', width: 250 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'date_added', headerName: 'Date Added', type: 'date', width: 250 },
  { field: 'date_modified', headerName: 'Date Modified', type: 'date', width: 250 },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: (params) => {
      return (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ cursor: 'pointer' }}
        >
          <MatEdit index={params.row.id} />
        </div>
      );
    },
  },
];

export default function API() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [value, setValue] = React.useState(0);
  const [status, setStatus] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    console.log('handleClose');
  };

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  /**
   * GET Details from API
   */
  useEffect(() => {
    axios
      .get(API_URL + 'ip')
      .then((response) => {
        // Update status and Date Format
        _.map(response.data.data, function (data) {
          data.status = data.status == 1 ? 'Enabled' : 'Disabled';
          data.date_added = moment(data.date_added).format('DD/MM/YYYY');
          data.date_modified = moment(data.date_modified).format('DD/MM/YYYY');
        });
        setRows(response.data.data);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div style={{ height: 580, width: '100%', backgroundColor: '#fff' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <Box sx={{ width: '100%', backgroundColor: '#fff' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="Edit API">
            <Tab label="General" {...a11yProps(0)} />
            <Tab label="IP Addresses" {...a11yProps(1)} />
            <Tab label="Session" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {/** General Section */}
          <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="user"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="API Username"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              )}
              rules={{ required: 'API Username required' }}
            />
            <Controller
              name="API_Key"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextareaAutosize
                  minRows={5}
                  label="API Key"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                  style={{ width: '90%' }}
                />
              )}
              rules={{ required: 'API Key required' }}
            />
            <div>
              <Button variant="contained" onClick={handleClose}>
                Generate
              </Button>
            </div>
            {/***  Select Status  ***/}
            <Controller
              name="API_Key"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField select label="Select" value={status} onChange={handleStatus}>
                  {api_status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              rules={{ required: '' }}
            />
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/** IP Addresses Section */}
          IP Addresses
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/** Session Section */}
          Session
        </TabPanel>
      </Box>
    </>
  );
}
