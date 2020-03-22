import React, { Component } from "react";
import Link from "next/link";
import { Provider } from "react-redux";
import { createStore } from "../../store";
import reducer, { homeActionCreators } from "./homeRedux";

let reduxStore;
const getOrCreateStore = (initialState, reducer) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === "undefined") {
    return createStore(initialState, reducer);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = createStore(initialState, reducer);
  }

  return reduxStore;
};

class HomeContainer extends Component {
  static async getInitialProps(ctx) {
    const reduxStore = getOrCreateStore(undefined, reducer);
    ctx.reduxStore = reduxStore;
    // HomeContianer是一个路由切换时，保持布局和状态的组件，所以只需要在服务端初始化一次，在客户端只需要获取本地的store即可。
    // 即 getOrCreateStore 方法在服务端是 createStore，在客户端是 getStore。
    if (ctx.req) {
      const { dispatch } = reduxStore;
      await homeActionCreators.initDataOnServer(0.2)(dispatch);
    }
    return { initialReduxState: reduxStore.getState() };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, initialReduxState } = this.props;
    const store = getOrCreateStore(initialReduxState, reducer);
    return (
      <Provider store={store}>
        {children}
        <div className="menu">
          <Link href={{ pathname: "/home" }}>
            <a>
              <div className="item">首页</div>
            </a>
          </Link>
          <Link href={{ pathname: "/home/mine" }}>
            <a>
              <div className="item">我的</div>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .menu {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}</style>
      </Provider>
    );
  }
}

export default HomeContainer;
