import React, { Fragment } from 'react';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ ctx, router, Component }){
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() { 
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Fragment;
    const layoutProps = Component.Layout ? pageProps : {}
    return ( <Layout {...layoutProps}>
      <Component {...pageProps}/>
    </Layout> );
  }
}
 
export default MyApp;