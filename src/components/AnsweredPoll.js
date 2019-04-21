import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { orderBy, selectAnsweredPoll } from "../utils";
import PollList from "./PollList";

class AnsweredPoll extends Component {
  render() {
    return (
      <div>
        <PollList questions={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = ({ questions, signin }) => {
  const answeredPoll = selectAnsweredPoll(
    Object.values(questions),
    signin.user
  );

  return {
    questions: orderBy(answeredPoll, "timestamp DESC")
  };
};

export default withRouter(connect(mapStateToProps)(AnsweredPoll));
