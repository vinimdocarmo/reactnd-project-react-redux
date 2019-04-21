import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import { fetchAllUsers } from "../reducers/users";
import { fetchAllQuestions } from "../reducers/questions";

class LoggedArea extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    if (!this.props.isLoggedIn) {
      return;
    }

    dispatch(fetchAllUsers());
    dispatch(fetchAllQuestions());
  }

  render() {
    return this.props.isLoggedIn ? (
      <div className="container">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/add" component={NewPoll} />
        <Route path={`/questions/:questionId`} component={Question} />
      </div>
    ) : (
      <Redirect
        to={{
          pathname: "/signin",
          state: { from: this.props.location }
        }}
      />
    );
  }
}

const mapStateToProps = ({ signin }) => ({ isLoggedIn: signin.isLoggedIn });

export default withRouter(connect(mapStateToProps)(LoggedArea));
