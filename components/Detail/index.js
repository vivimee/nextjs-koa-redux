import React, { Component } from "react";
import { connect } from "react-redux";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const str = JSON.stringify(this.props.reduxState);
    return <h3>DetailContainer{str}</h3>;
  }
}

export default connect(state => ({ reduxState: state }))(DetailContainer);
