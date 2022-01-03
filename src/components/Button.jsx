import styled from "styled-components";

export const AuthBtn = styled.button`
  padding: 0.9rem 2rem;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  background-color: ${(props) =>
    props.auth === "login" ? "transparent" : "#2BD0D0"};
  color: ${(props) => (props.auth === "login" ? "#9E9AA8" : "#fff")};
  border-radius: 28px;
  display: inline-block;
  text-transform: capitalize;
`;
