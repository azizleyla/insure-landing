import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { questionObj } from "../utils/contstans";

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isShowDesc, setIsShowDesc] = useState(false);
  const [className, setClassName] = useState("btn");
  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setClassName("btn correct");
    } else {
      setClassName("btn wrong");
    }
    setIsShowDesc(true);
  };
  return (
    <Wrapper>
      <div className="question-container">
        <h4>Which of the options would best complete the code below?</h4>
      </div>
      <div className="answers-container">
        {questionObj.answers.map((answer, index) => (
          <>
            <button
              disabled={selectedAnswer && selectedAnswer.id !== answer.id}
              className={
                selectedAnswer === answer
                  ? className
                  : answer.correct !== selectedAnswer.correct &&
                    selectedAnswer !== answer
                  ? "btn correct"
                  : "btn"
              }
              onClick={() => handleClick(answer)}
              key={index}
            >
              {answer.answerContent}
            </button>
            {isShowDesc && answer === selectedAnswer && (
              <p>{answer.desc}</p>
            )}
          </>
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
  .btn {
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
    background: aliceblue;
    border: 1px solid #84c5fe;
    opacity: 1;
    &:disabled {
      background-color: (rgba(239, 239, 239, 0.3), rgba(19, 1, 1, 0.3));
      opacity: 0.5;
      cursor: not-allowed;
    }
    &.correct {
      background: #e8f5e9;
      border: 1px solid #43a047;
      color: #43a047;
      & + p {
        color: #43a047;
      }
    }
    &.wrong {
      background: #ffebee;
      color: #ff5252;
      border: 1px solid #ff5252;
      & + p {
        color: #ff5252;
      }
    }
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

    & + p {
      font-weight: 500;
      font-size: 13px;
      line-height: 170%;
      margin-bottom: 3rem;
    }

    &.correct + p {
    }
  }
`;

export default Question;
