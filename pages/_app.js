import App from "next/app";
import dynamic from 'next/dynamic'
import React, { Fragment } from "react";

const Menu = dynamic(import('../components/menu'));

export default class MtzpMerchantApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const showMenu = ctx.req && ctx.req.extendShowMenu;

    return { pageProps, showMenu };
  }

  render() {
    const { Component, pageProps, showMenu } = this.props;

    return (
      <Fragment>
        <Component {...pageProps} />
        {showMenu && <Menu />}
      </Fragment>
    );
  }
}
