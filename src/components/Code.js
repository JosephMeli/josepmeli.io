import React from "react";
import styled from "styled-components";

import JavaScript_logo from "../assets/js_logo.png";
import Shell_logo from "../assets/shell_logo.png";

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 65%;
  max-width: 600px;
  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
  @media (max-width: 700px) {
    width: 75%;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 250;
  height: 150;
  margin: 20px;
  padding: 15px;
  background: #ffffff;
  opacity: 1;
  border-radius: 5px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledCardTitle = styled.h4`
  font-weight: bold;
  color: #68b6e3;
  &:hover {
    border-bottom: solid 2px #68b6e3;
    animation: dropdown 0.2s forwards;
  }
`;
const StyledDescription = styled.p`
  color: #555;
`;

const Styledlogo = styled.img`
  height: 30px;
  width: auto;
  padding: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;

  &:active {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`;

class Code extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledCard>
          <StyledLink href="https://github.com/NERVEUML/Test-runner-webapp">
            <StyledCardTitle>Test-Runner</StyledCardTitle>
          </StyledLink>
          <Styledlogo src={JavaScript_logo} alt="JavaScript_logo" />
          <StyledDescription>
            This app enables us to log and report on robot testing data from
            field research. The application catalogs the data defined by user
            input and can be exported for further analyzing.
          </StyledDescription>
        </StyledCard>
        <StyledCard>
          <StyledLink href="https://github.com/NERVEUML/SD-Ripper">
            <StyledCardTitle>SD-Ripper</StyledCardTitle>
          </StyledLink>
          <Styledlogo src={Shell_logo} alt="Shell_logo" />
          <StyledDescription>
            This is a script for reading from multiple SD cards at the same
            time.
          </StyledDescription>
        </StyledCard>
      </StyledView>
    );
  }
}
export default Code;
