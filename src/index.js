import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import Login from "./components/Login";
import middleware from "./middleware";
import reducers from "./reducers";
import Logout from "./components/Logout";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/app" component={App} />
      <Route path="/signin" component={Login} />
      <Route path="/signout" component={Logout} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
