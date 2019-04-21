import React from "react";

export default function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.state.from.pathname}</code>
      </h3>
    </div>
  );
}
