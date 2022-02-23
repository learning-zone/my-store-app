import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { API_URL } from '../../config/config'; 
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function API() {
  let [users, setUsers] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get(API_URL + 'ip')
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 5000,
  });

  const columns = React.useMemo(
    () => data.columns.map((col) => (col.field === 'rating' ? { ...col, sortable: false } : col)),
    [data.columns]
  );

  return (
    <>
      <div className="App">
        <h2>The JSON below is loaded from an external API!</h2>
        <code>{JSON.stringify(users)}</code>
      </div>
      <div style={{ height: 580, width: '100%', backgroundColor: '#fff' }}>
        <DataGrid {...data} columns={columns} />
      </div>
    </>
  );
}
