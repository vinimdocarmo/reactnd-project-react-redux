import { _getQuestions } from "../_DATA";

export const FETCH_ALL_QUESTIONS = "FETCH_ALL_QUESTIONS";
export const CHOOSE_OPTION = "CHOOSE_OPTION";

export const fetchAllQuestions = () => dispatch =>
  _getQuestions().then(questions =>
    dispatch({ type: FETCH_ALL_QUESTIONS, questions })
  );

export const chooseOption = (questionId, option, user) => {
  return {
    type: CHOOSE_OPTION,
    questionId,
    option,
    user
  };
};

export default function handleQuestions(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_QUESTIONS:
      return action.questions;
    case CHOOSE_OPTION:
      let questionId = action.questionId;
      let currentQuestion = state[questionId];
      let currentChoosenOption = currentQuestion[action.option];

      return Object.assign({}, state, {
        [questionId]: Object.assign({}, currentQuestion, {
          [action.option]: Object.assign({}, currentChoosenOption, {
            votes: [action.user.id, ...currentChoosenOption.votes]
          })
        })
      });
    default:
      return state;
  }
}
