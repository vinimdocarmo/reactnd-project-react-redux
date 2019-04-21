import React from "react";

import { Link } from "react-router-dom";

export default function PollItem({ item }) {
  return (
    <Link to={`/questions/${item.id}`}>
      Whould you rather {item.optionOne.text} or {item.optionTwo.text}?
    </Link>
  );
}
