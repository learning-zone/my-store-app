import React, { Component } from 'react';
import Products from '../../components/catalog/Products';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Products />;
  }
}

export default ProductsContainer;