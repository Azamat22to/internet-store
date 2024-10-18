import React from "react";

export default function Question({ questions, index }) {
  if (!questions || questions.length === 0 || index >= questions.length) {
    return <div>No questions available</div>;
  }

  return (
    <div>
      {questions[index].options.map((option, idx) => {
        return (
          <button key={idx} className="btn btn-option">
            {option}
          </button>
        );
      })}
    </div>
  );
}
