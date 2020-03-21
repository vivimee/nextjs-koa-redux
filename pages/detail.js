import React, { Component } from "react";
import { withRedux } from "../lib/redux";
import detailReducer, { detailActions } from "../components/Detail/detailRedux";
import DetailContainer from "../components/Detail";

class Detail extends Component {
  static async getInitialProps({ reduxStore }) {
    const { dispatch, getState } = reduxStore;

    await detailActions.setDetail()(dispatch);

    return { name: "detail" };
  }
  componentDidMount() {

  }
  render() {
    return <DetailContainer />;
  }
}

export default withRedux(Detail, detailReducer);
