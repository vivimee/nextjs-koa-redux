import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { homeTabActionCreators } from "./homeTabRedux";

class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      store: {
        homeContainer: { name: homeContainerName },
        homeTab: { name: homeTabName }
      },
      setHomeTabName
    } = this.props;

    return (
      <Fragment>
        <h3>{homeContainerName}</h3>
        <h3>{homeTabName}</h3>
        <button onClick={setHomeTabName}>set home tab name</button>
      </Fragment>
    );
  }
}

export default connect(state => ({ store: state }), {
  setHomeTabName: homeTabActionCreators.setHomeTabName
})(HomeTab);
