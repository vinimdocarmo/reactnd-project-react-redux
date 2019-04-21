import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import UnansweredPoll from "./UnansweredPoll";
import AnsweredPoll from "./AnsweredPoll";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { choosenPoll: "unanswered" };
  }

  classFor(poll) {
    return this.state.choosenPoll === poll ? "active" : "";
  }

  render() {
    return (
      <div className="container">
        <div>
          <span>
            <button
              className={`btn btn-link ${this.classFor("unanswered")}`}
              onClick={() => this.setState({ choosenPoll: "unanswered" })}
            >
              Unanswered
            </button>
          </span>
          <span>
            <button
              className={`btn btn-link ${this.classFor("answered")}`}
              onClick={() => this.setState({ choosenPoll: "answered" })}
            >
              Answered
            </button>
          </span>
        </div>
        {this.state.choosenPoll === "answered" ? (
          <AnsweredPoll />
        ) : (
          <UnansweredPoll />
        )}
      </div>
    );
  }
}

export default withRouter(Home);
