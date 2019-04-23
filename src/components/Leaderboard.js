import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { countsByUser } = this.props;

    return (
      <div className="container">
        <ol>
          {this.props.users.map(user => (
            <li key={user.id}>
              <img
                src={user.avatarURL}
                className="author-avatar author-avatar--sm"
                alt="Author"
              />
              {user.name} has asked {countsByUser[user.id].questionsCount}{" "}
              questions and answered {countsByUser[user.id].answersCount}{" "}
              questions.
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }) => {
  const usersCollection = Object.values(users);
  const questionsCollection = Object.values(questions);
  const countsByUser = {};

  for (let user of usersCollection) {
    countsByUser[user.id] = {
      questionsCount: 0,
      answersCount: 0
    };
  }

  for (let question of questionsCollection) {
    countsByUser[question.author].questionsCount++;

    [...question.optionOne.votes, ...question.optionTwo.votes].forEach(
      user => countsByUser[user].answersCount++
    );
  }

  return {
    users: usersCollection.sort((a, b) => {
      const countsA = countsByUser[a.id];
      const countsB = countsByUser[b.id];

      if (
        countsA.answersCount + countsA.questionsCount >
        countsB.answersCount + countsB.questionsCount
      ) {
        return -1;
      }
      if (
        countsA.answersCount + countsA.questionsCount <
        countsB.answersCount + countsB.questionsCount
      ) {
        return 1;
      }
      return 0;
    }),
    countsByUser
  };
};

export default connect(mapStateToProps)(Leaderboard);
