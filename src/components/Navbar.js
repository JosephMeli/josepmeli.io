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
  padding-top: 15px;
  justify-content: flex-start;
`;
const StyledText = styled.h2`
  color: White;
  background-color: #2061c9;
  padding: 5px;
  letter-spacing: 2px;
  border-radius: 4%;
  margin-right: 10px;
`;
const StyledsubText = styled.h3`
  padding-right: 15px;
  display: inline;
  color: Black;
  &:hover {
    border-bottom: solid 2px blue;
  }
`;
const StyledName = styled.div`
  color: Black;
  letter-spacing: 3 px;
`;

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <StyledText>JM</StyledText>
            </NavLink>
            <Div>
              <StyledName>JOSEPH MELI</StyledName>
            </Div>
          </div>
          <StyledsubContainer>
            <NavLink style={{ textDecoration: "none" }} to="/code">
              <StyledsubText>Development</StyledsubText>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              <StyledsubText>Contact</StyledsubText>
            </NavLink>
          </StyledsubContainer>
        </StyledContainer>
      </React.Fragment>
    );
  }
}

export default Navbar;
