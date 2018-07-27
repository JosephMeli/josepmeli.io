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
  justify-content: space-around;
  padding-top: 20px;
`;
const StyledsubContainer = styled.div`
  padding-top: 20px;
  justify-content: flex-start;
`;
const StyledText = styled.h2`
  color: White;
  background-color: #2061c9;
  padding: 5px;
  letter-spacing: 2px;
  border-radius: 4%;
  margin-right: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const StyledMobileText = styled.h3`
  color: White;
  background-color: #2061c9;
  padding: 5px;
  letter-spacing: 2px;
  border-radius: 4%;
  margin-right: 10px;
  @media (min-width: 700px) {
    display: none;
  }
`;
const StyledsubText = styled.h3`
  padding-right: 15px;
  display: inline;
  color: #555;
  &:hover {
    border-bottom: solid 2px #2061c9;
  }
`;
const StyledName = styled.div`
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
        <StyledsubContainer>
          <NavLink style={{ textDecoration: "none" }} to="/code">
            <StyledsubText>Projects</StyledsubText>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/about">
            <StyledsubText>About</StyledsubText>
          </NavLink>
        </StyledsubContainer>
      </StyledContainer>
    );
  }
}

export default Navbar;
