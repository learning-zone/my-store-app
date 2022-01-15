import React from 'react';
import { ReportProblem } from '@material-ui/icons';

const NotFound = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h2>
        <ReportProblem /> 404 - Page Not Found !
      </h2>
      <p>I'm sorry, the page you were looking for cannot be found.</p>
    </div>
  );
};

export default NotFound;
