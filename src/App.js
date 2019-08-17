import React, { Component } from "react";
import { hot } from "react-hot-loader";
import GlobalStyleSheet from "./components/globalstylesheet";
import AppRouter from "./components/router";
class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default hot(module)(App);
