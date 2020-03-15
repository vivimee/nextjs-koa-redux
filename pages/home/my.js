import React, { Component, Fragment } from 'react';

class MyTab extends Component {
  static async getInitialProps(ctx) {
    return { name: 'pmm' };
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <Fragment>
      <h1>MyTab</h1>
    </Fragment> );
  }
}
 
export default MyTab;