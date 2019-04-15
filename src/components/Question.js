import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Question extends Component {
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
              <button>{question.optionOne && question.optionOne.text}</button>
              <button>{question.optionTwo && question.optionTwo.text}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }, { match }) => {
  const question = questions[match.params.questionId] || {};
  const author = question.author ? users[question.author] : {};

  return { author, question };
};

export default withRouter(connect(mapStateToProps)(Question));
