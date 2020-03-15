
import React, { Component, Fragment } from 'react';

class Application extends Component {
  static async getInitialProps(ctx) {
    return { name: 'pmm' };
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <Fragment>
      <h1>Application</h1>
    </Fragment> );
  }
}
 
export default Application;