import React, { Component, Fragment } from 'react';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}
 
export default HomeContainer;
