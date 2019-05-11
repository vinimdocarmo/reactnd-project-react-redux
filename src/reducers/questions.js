import { _getQuestions, _saveQuestion } from "../_DATA";
import { loading } from "./loading";

export const FETCH_ALL_QUESTIONS = "FETCH_ALL_QUESTIONS";
export const CHOOSE_OPTION = "CHOOSE_OPTION";
export const CREATE_QUESTION = "CREATE_QUESTION";

export const fetchAllQuestions = () => dispatch => {
  dispatch(loading(true));
  return _getQuestions().then(questions => {
    dispatch({ type: FETCH_ALL_QUESTIONS, questions });
    dispatch(loading(false));
  });
}

export const chooseOption = (questionId, option, user) => {
  return {
    type: CHOOSE_OPTION,
    questionId,
    option,
    user
  };
};

export const createQuestion = (
  optionOneText,
  optionTwoText,
  author
) => dispatch => {
  return _saveQuestion({ optionOneText, optionTwoText, author }).then(
    question => dispatch({ type: CREATE_QUESTION, question })
  );
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
    case CREATE_QUESTION:
      return Object.assign({}, state, {
        [action.question.id]: action.question
      });
    default:
      return state;
  }
}
