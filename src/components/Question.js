import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { chooseOption } from "../reducers/questions";

class Question extends Component {
  handleOption(e, questionId, option) {
    e.preventDefault();
    this.props.dispatch(
      chooseOption(questionId, option, this.props.authedUser)
    );
  }

  classFor(option) {
    if (this.props.answeredOption === option) {
      return "badge-primary";
    } else {
      return "badge-light";
    }
  }

  render() {
    const { question, author } = this.props;

    return (
      <div>
        <div className="card text-center">
          <div className="card-body">
            <div className="card-body__author">
              <img
                src={author.avatarURL}
                className="author-avatar"
                alt="Author"
              />
              <b className="would-you">Would You Rather</b>
            </div>
            <div>
              {this.props.answeredOption ? (
                <div>
                  <span
                    className={`badge option-badge ${this.classFor(
                      "optionOne"
                    )}`}
                  >
                    {question.optionOne.text}{" "}
                    <span className="badge badge-pill badge-dark">
                      {this.props.optionOneCount}
                    </span>
                  </span>
                  <span
                    className={`badge option-badge ${this.classFor(
                      "optionTwo"
                    )}`}
                  >
                    {question.optionTwo.text}{" "}
                    <span className="badge badge-pill badge-dark">
                      {this.props.optionTwoCount}
                    </span>
                  </span>
                </div>
              ) : (
                <div>
                  <button
                    onClick={e =>
                      this.handleOption(e, question.id, "optionOne")
                    }
                  >
                    {question.optionOne && question.optionOne.text}
                  </button>
                  <button
                    onClick={e =>
                      this.handleOption(e, question.id, "optionTwo")
                    }
                  >
                    {question.optionTwo && question.optionTwo.text}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, signin }, { match }) => {
  const questionId = match.params.questionId;
  const question = questions[questionId] || {};
  const author = question.author ? users[question.author] : {};

  const optionOne = question.optionOne || { votes: [] };
  const optionTwo = question.optionTwo || { votes: [] };

  let answeredOption = null;

  if (optionOne.votes.some(vote => vote === signin.user.id)) {
    answeredOption = "optionOne";
  } else if (optionTwo.votes.some(vote => vote === signin.user.id)) {
    answeredOption = "optionTwo";
  }

  return {
    author,
    question,
    optionOneCount: optionOne.votes.length,
    optionTwoCount: optionTwo.votes.length,
    answeredOption,
    authedUser: signin.user
  };
};

export default withRouter(connect(mapStateToProps)(Question));
