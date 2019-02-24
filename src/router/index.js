import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import home from "../pages/home/home";
class RouterConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default RouterConfig;
