import React, { Component, Fragment } from 'react';

class MessageTab extends Component {
  static async getInitialProps(ctx) {
    return { name: 'pmm' };
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <Fragment>
      <h1>MessageTab</h1>
    </Fragment> );
  }
}
 
export default MessageTab;