import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class UnansweredPoll extends Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.questions).map(questionId => (
            <li key={questionId}>
              <Link to={`/questions/${questionId}`}>{questionId}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({ questions });

export default withRouter(connect(mapStateToProps)(UnansweredPoll));
