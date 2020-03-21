import React, { Component } from "react";
import { connect } from "react-redux";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const str = JSON.stringify(this.props.reduxState);
    return <h3>HomeContainer{str}</h3>;
  }
}

export default connect(state => ({ reduxState: state }))(HomeContainer);
