import React from "react";

export default function Progress({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}
        </strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}