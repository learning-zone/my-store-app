import React, { Component } from 'react';
import OnlineUsers from '../../components/reports/onlineUsers';

class OnlineUsersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <OnlineUsers />;
  }
}

export default OnlineUsersContainer;