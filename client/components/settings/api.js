import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { API_URL } from '../../config/config';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'username', headerName: 'User Name', width: 250, editable: true },
  { field: 'status', headerName: 'Status', width: 150, editable: true },
  { field: 'date_added', headerName: 'Date Added', type: 'date', width: 250, editable: true },
  { field: 'date_modified', headerName: 'Date Modified', type: 'date', width: 250, editable: true },
];

export default function API() {
  let [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + 'ip')
      .then((response) => {
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
    </>
  );
}
