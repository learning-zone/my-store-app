import React, { Component } from 'react';
import Customers from '../../components/customers/Customers';

class CustomersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Customers />;
  }
}

export default CustomersContainer;