//Dependencies
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { fadeIn } from "react-animations";

const fader = keyframes`${fadeIn}`;

const Div = styled.div`
  animation: 2s ${fader};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: flex;
  justify-content: space-around;
`;
const StyledsubContainer = styled.div`
  padding-top: 20px;
  justify-content: flex-start;
`;
const StyledText = styled.h2`
  color: White;
  background-color: #68b6e3;
  padding: 5px;
  letter-spacing: 2px;
  border-radius: 4%;
  @media (max-width: 700px) {
    display: none;
  }
`;
const StyledMobileText = styled.h3`
  color: White;
  background-color: #68b6e3;

  letter-spacing: 2px;
  border-radius: 4%;

  width: 100%;
  @media (min-width: 700px) {
    display: none;
  }
`;
const StyledMobileMenu = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;
const StyledsubText = styled.h3`
  display: inline;
  padding-right: 15px;
  color: #555;
  &:hover {
    border-bottom: solid 2px #68b6e3;
  }
`;
const StyledName = styled.div`
  padding-left: 10px;
  color: #555;
  letter-spacing: 3 px;
  @media (max-width: 700px) {
    display: none;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <StyledContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <StyledText>JM</StyledText>
            <StyledMobileText>Joseph Meli</StyledMobileText>
          </NavLink>
          <Div>
            <StyledName>JOSEPH MELI</StyledName>
          </Div>
        </div>
        <StyledMobileMenu />
        <StyledsubContainer>
          <NavLink style={{ textDecoration: "none" }} to="/Code">
            <StyledsubText>Projects</StyledsubText>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Blog">
            <StyledsubText>Blog</StyledsubText>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/About">
            <StyledsubText>About</StyledsubText>
          </NavLink>
        </StyledsubContainer>
      </StyledContainer>
    );
  }
}

export default Navbar;
