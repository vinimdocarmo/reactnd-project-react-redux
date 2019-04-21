import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { orderBy, selectUnansweredPoll } from "../utils";
import PollList from "./PollList";

class UnansweredPoll extends Component {
  render() {
    return (
      <div>
        <PollList questions={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = ({ questions, signin }) => {
  const unsweredPoll = selectUnansweredPoll(
    Object.values(questions),
    signin.user
  );

  return {
    questions: orderBy(unsweredPoll, "timestamp DESC")
  };
};

export default withRouter(connect(mapStateToProps)(UnansweredPoll));
