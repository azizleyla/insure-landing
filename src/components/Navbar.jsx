import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navItems } from "../utils/contstans";
import logo from "../images/Shortly.svg";
import { AuthBtn } from "./Button";
import hamburger from "../images/hamburger.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const toggleNavbar = () => setIsOpenNavbar(!isOpenNavbar);

  return (
    <Wrapper className="container">
      <nav className="navbar-container">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button onClick={toggleNavbar} className="toggle-btn">
            <img src={hamburger} alt="hamburger" />
          </button>
        </div>
        <ul className={isOpenNavbar ? "navbar-menu show" : "navbar-menu"}>
          {navItems.map((navItem) => (
            <li className="navbar-item">
              <Link className="navbar-link trans-04" to={navItem.path}>
                {navItem.label}
              </Link>
            </li>
          ))}
          <div className="navbar-btns2">
            <AuthBtn style={{ color: "#fff" }} auth="login">
              Login
            </AuthBtn>
            <AuthBtn>Sign up</AuthBtn>
          </div>
        </ul>
        <div className="navbar-btns">
          <AuthBtn auth="login">Login</AuthBtn>
          <AuthBtn>Sign up</AuthBtn>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 4.8rem 0;
  padding-left: 15px;
  padding-right: 15px;
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 776px) {
      display: block;
    }
  }
  .toggle-btn {
    background-color: transparent;
    margin-left: auto;
    display: none;
    @media (max-width: 776px) {
      display: block;
    }
  }

  .navbar-btns {
    margin-left: auto;
    @media (max-width: 776px) {
      display: none;
    }
  }
  .navbar-btns2 {
    display: none;
    width: 95%;
    @media (max-width: 776px) {
      display: flex;
      flex-direction: column;
    }
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 776px) {
      width: 100%;
      margin-bottom: 2.3rem;
    }
  }
  .navbar-menu {
    display: flex;
    height: auto;
    border-radius: 10px;
    margin-left: 4.5rem;
    @media (max-width: 776px) {
      height: 0;
      flex-direction: column;
      overflow: hidden;
      transition: all 0.4s;
      margin-left: 0;
      padding: 4rem 2.4rem;
      align-items: center;
      &.show {
        height: 38rem;
        background-color: #3a3054;
      }
    }

    li {
      &:not(:first-child) {
        margin-left: 2.9rem;
        @media (max-width: 776px) {
          margin-left: 0;
        }
      }
      a {
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        color: #9e9aa8;
        &:hover {
          color: #34313d;
        }
        @media (max-width: 776px) {
          color: #fff;
          margin-bottom: 3rem;
          display: inline-block;
          font-size: 18px;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
`;

export default Navbar;
