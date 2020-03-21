import React, { Component } from "react";
import { withRedux } from "../lib/redux";
import homeReducer, { homeActions } from "../components/Home/homeRedux";
import HomeContainer from '../components/Home';

class Home extends Component {
  static async getInitialProps({ reduxStore }) {
    const { dispatch, getState } = reduxStore;

    await homeActions.setHome()(dispatch);

    return { a: 1, b: 2 };
  }
  componentDidMount() {

  }
  render() {
    return <HomeContainer />;
  }
}

export default withRedux(Home, homeReducer);
