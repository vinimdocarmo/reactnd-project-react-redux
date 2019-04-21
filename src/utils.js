export const orderBy = (collection, expression) => {
  const [prop, order] = expression.split(" ");

  return collection.sort((a, b) => {
    if (order === "DESC") {
      return b[prop] - a[prop];
    } else if (order === "ASC") {
      return a[prop] - b[prop];
    }

    throw new Error("order not allowed");
  });
};

export const selectAnsweredPoll = (poll, authedUser) => {
  const answeredPoll = [];

  for (let question of poll) {
    let allVotes = [...question.optionOne.votes, ...question.optionTwo.votes];
    if (allVotes.some(userId => userId === authedUser.id)) {
      answeredPoll.push(question);
    }
  }

  return answeredPoll;
};

export const selectUnansweredPoll = (poll, authedUser) => {
  const unansweredPoll = [];

  for (let question of poll) {
    let allVotes = [...question.optionOne.votes, ...question.optionTwo.votes];
    if (allVotes.every(userId => userId !== authedUser.id)) {
      unansweredPoll.push(question);
    }
  }

  return unansweredPoll;
};

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
