import React, { Component } from 'react';
import CustomFields from '../../components/customers/CustomFields';

class CustomFieldsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CustomFields />;
  }
}

export default CustomFieldsContainer;