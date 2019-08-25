import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Router from "./components/router";

class App extends Component {
  render() {
    return <Router />;
  }
}

// export default hot(module)(withAuthenticator(App));
export default hot(module)(App);
