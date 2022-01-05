import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Question = ({ question: initialQuestion }) => {
  const [question, setQuestion] = useState({
    isAnswered: false,
    isClickedContent: "",
    ...initialQuestion,
  });

  const handleClick = (clickedAnswerContent) => {
    // const rightAnswerContent = question.answers.find(
    //   (a) => a.isTrue,
    // ).content;
    const answers = question.answers.map((a) =>
      a.content === clickedAnswerContent ? { ...a, isClicked: true } : a,
    );

    let newQuestionObj = {
      ...question,
      isAnswered: true,
      isClickedContent: clickedAnswerContent,
      answers,
    };
    setQuestion(newQuestionObj);
  };

  return (
    <Wrapper>
      <div className="question-container">
        <h4>{question.question.content}</h4>
      </div>
      <div className="answers-container">
        {question.answers.map((answer, index) => (
          <button
            disabled={question.isAnswered && !answer.isTrue}
            className={
              question.isAnswered
                ? answer.isTrue
                  ? "btn correct"
                  : answer.content === question.isClickedContent
                  ? "btn wrong"
                  : "btn"
                : "btn"
            }
            onClick={() => handleClick(answer.content)}
            key={index}
          >
            {answer.content}
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
