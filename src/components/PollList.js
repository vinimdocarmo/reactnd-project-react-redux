import React from "react";
import PollItem from "./PollItem";

export default function PollList({ questions }) {
  return questions.length === 0 ? (
    <p>Empty list</p>
  ) : (
    <ul>
      {questions.map(question => (
        <li key={question.id}>
          <PollItem item={question} />
        </li>
      ))}
    </ul>
  );
}
