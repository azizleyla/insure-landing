import React from "react";
import styled from "styled-components";
import Question from "../components/Question";

const questions = [
  {
    question: {
      content: "Which of the options would best complete the code below?",
    },
    rightAnswerCount: 1,
    answers: [
      {
        content: "var a=5",
        isTrue: false,
        isClicked: false,
      },
      {
        content: "let a=5",
        isTrue: false,
        isClicked: false,
        explanation: "ich of the options would best comp",
      },
      {
        content: "const a=5",
        isTrue: true,
        isClicked: false,
      },
      {
        content: "a=5",
        isTrue: false,
        isClicked: false,
      },
    ],
  },
];

const Blog = () => {
  return (
    <Wrapper>
      <Question question={questions[0]} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

export default Blog;
