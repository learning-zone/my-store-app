import React, { Component } from 'react';
import Orders from '../../components/sales/orders';

class OrdersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Orders />;
  }
}

export default OrdersContainer;