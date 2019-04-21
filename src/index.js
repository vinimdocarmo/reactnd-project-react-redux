import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Login from "./components/Login";
import middleware from "./middleware";
import reducers from "./reducers";
import Logout from "./components/Logout";
import LoggedArea from "./components/LoggedArea";
import NoMatch from "./components/NoMatch";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/signin" component={Login} />
        <Route path="/signout" component={Logout} />
        <Route path="/404" component={NoMatch} />
        <Route path="/" component={LoggedArea} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
