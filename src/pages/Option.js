import React from "react";

export default function Option({ options, index, answer, dispatch }) {
  const hasAnswer = answer !== null;

  return options[index].options.map((option, optionIndex) => {
    const isCorrect = optionIndex === options[index].correctAnswer;
    const isSelected = optionIndex === answer;

    return (
      <button
        className={`btn btn-option ${
          hasAnswer ? (isCorrect ? "correct" : isSelected ? "wrong" : "") : ""
        }`}
        onClick={() => dispatch({ type: "newAnswer", payload: optionIndex })}
        key={optionIndex}
      >
        {option}
      </button>
    );
  });
}
