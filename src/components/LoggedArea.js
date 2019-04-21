import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

    dispatch(fetchAllUsers());
    dispatch(fetchAllQuestions());
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/new-poll" component={NewPoll} />
        <Route path={`/questions/:questionId`} component={Question} />
      </div>
    );
  }
}

export default withRouter(connect()(LoggedArea));
