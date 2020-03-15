import React, { Component } from "react";
import Link from "next/link";

const Item = ({ children }) => (
  <div className="menu-item">
    <span>{children}</span>
  </div>
);

class Menu extends Component {
  static async getInitialProps() {}
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu-group">
        <Item>
          <Link href={{ pathname: "/home" }}>
            <a>简历</a>
          </Link>
        </Item>
        <Item>
          <Link href={{ pathname: "/home/job", query: { tab: "job" } }}>
            <a>职位</a>
          </Link>
        </Item>
        <Item>
          <Link href={{ pathname: "/home/message", query: { tab: "message" } }}>
            <a>消息</a>
          </Link>
        </Item>
        <Item>
          <Link href={{ pathname: "/home/my", query: { tab: "my" } }}>
            <a>我的</a>
          </Link>
        </Item>
      </div>
    );
  }
}

export default Menu;
