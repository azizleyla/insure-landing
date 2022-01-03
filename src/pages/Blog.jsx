import React from "react";
import styled from "styled-components";
import Question from "../components/Question";

const Blog = () => {
  return (
    <Wrapper>
      <Question />
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
