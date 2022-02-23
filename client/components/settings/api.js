import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { API_URL } from '../../config/config';

const columns = [
  { field: 'api_id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'User Name',
    width: 250,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
  {
    field: 'date_added',
    headerName: 'Date Added',
    type: 'date',
    width: 250,
    editable: true,
  },
  {
    field: 'date_modified',
    headerName: 'Date Modified',
    type: 'date',
    width: 250,
    editable: true,
  },
];

const rows = [
  { id: 1, username: 'Snow', status: 'Jon', date_added: 35, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 2, username: 'Lannister', status: 'Cersei', date_added: 42, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 3, username: 'Lannister', status: 'Jaime', date_added: 45, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 4, username: 'Stark', status: 'Arya', date_added: 16, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 5, username: 'Targaryen', status: 'Daenerys', date_added: null, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 6, username: 'Melisandre', status: null, date_added: 150, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 7, username: 'Clifford', status: 'Ferrara', date_added: 44, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 8, username: 'Frances', status: 'Rossini', date_added: 36, date_modified: '2022-01-19T14:31:47.000Z' },
  { id: 9, username: 'Roxie', status: 'Harvey', date_added: 65, date_modified: '2022-01-19T14:31:47.000Z' },
];

export default function API() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + 'ip')
      .then((response) => setData(response.data))
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
    </>
  );
}
