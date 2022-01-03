import React from "react";
import styled from "styled-components";
import { AuthBtn } from "./Button";
import heroImg from "../images/hero.png";
const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="text-box">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how
            your links are performing.
          </p>
          <AuthBtn>Get Started</AuthBtn>
        </div>
        <div className="img-box">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 3rem;
  .hero-container {
    display: flex;
    align-items: center;

    @media (max-width: 1200px) {
      gap: 1rem;
      align-items: stretch;
    }
    @media (max-width: 776px) {
      padding-left: 2.4rem;
      flex-direction: column-reverse;
    }
  }
  .text-box {
    margin-left: 9rem;

    @media (max-width: 776px) {
      margin-left: 0;
      text-align: center;
      margin-top: 6rem;
    }
    h1 {
      font-weight: bold;
      font-size: 8rem;
      line-height: 90px;
      letter-spacing: -2px;
      color: #34313d;
      @media (max-width: 1200px) {
        font-size: 6.2rem;
        line-height: 6.8rem;
      }
      @media (max-width: 776px) {
        font-size: 4.2rem;
        line-height: 4.8rem;
      }
    }
    p {
      margin-top: 0.5rem;
      margin-bottom: 3.8rem;
      font-weight: 500;
      font-size: 22px;
      line-height: 36px;
      letter-spacing: 0.15px;
      color: #9e9aa8;
      @media (max-width: 776px) {
        font-size: 1.8rem;
        line-height: 3rem;
      }
    }
  }
  .img-box {
    img {
      @media (max-width: 1200px) {
        width: 100%;
      }
      @media (max-width: 776px) {
        width: 100%;
      }
    }
  }
`;

export default Hero;
