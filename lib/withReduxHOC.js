import React from "react";
import { Provider } from "react-redux";
import { createStore } from "../store";
import App from "next/app";

export const withRedux = (PageComponent, reducer) => {
  const WithReduxWrapper = ({ initialReduxState, ...props }) => {
    const store = getOrInitializeStore(initialReduxState, reducer);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== "production") {
    const isAppHoc =
      PageComponent === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error("The withRedux HOC only works with PageComponents");
    }
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    WithReduxWrapper.displayName = `withRedux(${displayName})`;
  }

  if (PageComponent.getInitialProps) {
    WithReduxWrapper.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(undefined, reducer);

      // Provide the store to getInitialProps of pages
      context.reduxStore = reduxStore;

      // Run getInitialProps from HOCed PageComponent
      const pageProps =
        typeof PageComponent.getInitialProps === "function"
          ? await PageComponent.getInitialProps(context)
          : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: reduxStore.getState()
      };
    };
  }

  return WithReduxWrapper;
};

let reduxStore;
const getOrInitializeStore = (initialState, reducer) => {
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
