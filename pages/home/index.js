import React, { Component, Fragment } from "react";
import HomeContainer from '../../containers/HomeContainer';
import HomeTab from "../../components/HomeTab";

class Home extends Component {
  static Layout = HomeContainer;
  static async getInitialProps(ctx) {
    const layoutProps = await HomeContainer.getInitialProps(ctx);
    return { a: 1, b: 2, ...layoutProps };
  }
  componentDidMount() {

  }
  render() {
    return (
      <Fragment>
        <h3>Home</h3>
        <HomeTab />
      </Fragment>
    );
  }
}

export default (Home);
