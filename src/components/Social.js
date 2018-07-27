//Dependencies
import React, { Component } from "react";
import styled from "styled-components";
//Assests
import Github_logo from "../assets/GitHub.png";
import linkedin_logo from "../assets/linkedIn.png";

const StyledContainer = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Styledlogo = styled.img`
  height: 30px;
  width: auto;
  padding: 10px;
  &:hover {
    border-bottom: solid 2px #2061c9;
    animation: dropdown 0.2s forwards;
  }
`;

class Social extends Component {
  render() {
    return (
      <StyledContainer className="social-container">
        <a href="https://github.com/JosephMeli">
          <Styledlogo
            src={Github_logo}
            className="logoStyle"
            alt="Github_logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/josephmeli/">
          <Styledlogo
            src={linkedin_logo}
            className="logoStyle"
            alt="linkedin_logo"
          />
        </a>
      </StyledContainer>
    );
  }
}

export default Social;
