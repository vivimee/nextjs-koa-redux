# Nextjs-koa-redux

基于Nextjs，整合了koa和redux，支持动态layout。  
参照next-examples:
1. [with-koa](https://github.com/zeit/next.js/tree/master/examples/custom-server-koa)
2. [with-redux](https://github.com/zeit/next.js/tree/master/examples/with-redux)
3. [dynamic-layout](https://github.com/zeit/next.js/tree/master/examples/with-dynamic-app-layout)  

## 单个页面引入redux
1. 使用 withRedux HOC
2. 在 getInitialProps 里完善 store 需要的数据
```js
import React, { Component } from "react";
import { withRedux } from "../lib/withReduxHOC";
import detailReducer, { detailActions } from "../components/Detail/detailRedux";

class Detail extends Component {
  static async getInitialProps({ reduxStore }) {
    const { dispatch, getState } = reduxStore;
    await detailActions.setDetail()(dispatch);
    return { name: "detail" };
  }
  render() {
    return <h3>Detail page</h3>;
  }
}

export default withRedux(Detail, detailReducer);

```

## 具有相同Layout的页面使用redux
1. 在layout里初始化redux
2. 在page里添加 Layout 静态属性
3. 在page的 getInitialProps里完善 store 需要的数据
4. 在_app.js里用 layout 包裹 component  
参考 Home