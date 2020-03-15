import React, { Component, Fragment } from 'react';

class JobTab extends Component {
  static async getInitialProps(ctx) {
    return { name: 'pmm' };
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <Fragment>
      <h1>JobTab</h1>
    </Fragment> );
  }
}
 
export default JobTab;