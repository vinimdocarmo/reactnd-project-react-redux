import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signOut } from "../reducers/signin";

class Logout extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(signOut());
      this.props.history.push({ pathname: "/signin" });
    }, 1000);
  }

  render() {
    return (
      <div className="container text-center">
        <b>Singing you out...</b>
      </div>
    );
  }
}

export default withRouter(connect()(Logout));
