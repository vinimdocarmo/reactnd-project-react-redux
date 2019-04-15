import { _getQuestions } from "../_DATA";

export const FETCH_ALL_QUESTIONS = "FETCH_ALL_QUESTIONS";

export const fetchAllQuestions = () => dispatch =>
  _getQuestions().then(questions =>
    dispatch({ type: FETCH_ALL_QUESTIONS, questions })
  );

export default function handleFechAllQuestions(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
