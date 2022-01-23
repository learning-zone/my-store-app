import React, { Component } from 'react';
import API from '../../components/settings/api'


class APIContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <API />;
  }
}

export default APIContainer;