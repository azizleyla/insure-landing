import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { questionObj } from "../utils/contstans";

const Question = () => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const handleClick = (answer) => {
    setCorrectAnswer(answer);
    console.log(answer);
  };
  return (
    <Wrapper>
      <div className="question-container">
        <h4>Which of the options would best complete the code below?</h4>
      </div>
      <div className="answers-container">
        {questionObj.answers.map((answer, index) => (
          <button
            className={
              correctAnswer.correct && answer.correct ? "correct" : ""
            }
            onClick={() => handleClick(answer)}
            key={index}
          >
            {answer.answerContent}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 500px;
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 170%;
    color: #343f56;
  }
  .answers-container {
    margin-top: 3.2rem;
  }
  button {
    width: 100%;
    padding: 1.6rem;
    background: #fcfdfd;
    border: 1px solid #cbd5e1;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    line-height: 170%;
    color: #343f56;
    margin-bottom: 2rem;
    &.correct {
      background: #e8f5e9;
      border: 1px solid #43a047;
      color: #43a047;
    }
    &.wrong {
      background: #ffebee;

      border: 1px solid #ff5252;
    }
  }
`;

export default Question;
