import React, { Component } from 'react';
import HomeContainer from '../../containers/HomeContainer';

class Mine extends Component {
  static Layout = HomeContainer;
  static async getInitialProps(ctx) {
    const layoutProps = await HomeContainer.getInitialProps(ctx);
    return { a: 1, b: 2, ...layoutProps };
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <h3>mine</h3> );
  }
}
 
export default Mine;