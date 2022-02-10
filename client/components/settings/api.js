import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function API() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 5000,
  });

  const columns = React.useMemo(
    () =>
      data.columns.map((col) =>
        col.field === 'rating' ? { ...col, sortable: false } : col,
      ),
    [data.columns],
  );

  return (
    <div style={{ height: 580, width: '100%', backgroundColor: '#fff' }}>
      <DataGrid {...data} columns={columns} />
    </div>
  );
}
