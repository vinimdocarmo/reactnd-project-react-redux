import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { orderBy } from "../utils";
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

const mapStateToProps = ({ questions }) => ({
  questions: orderBy(Object.values(questions), "timestamp DESC")
});

export default withRouter(connect(mapStateToProps)(UnansweredPoll));
