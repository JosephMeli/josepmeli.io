import React from "react";
import styled from "styled-components";

import JavaScript_logo from "../assets/js_logo.png";

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 45%;
  max-width: 500px;
  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
`;

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 250;
  height: 150;
  margin: 20px;
  padding: 10px;
  background: #ffffff;
  opacity: 0.5;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledCardTitle = styled.h4`
  font-weight: bold;

  &:hover {
    border-bottom: solid 2px blue;
    animation: dropdown 0.2s forwards;
  }
`;
const StyledDescription = styled.p``;

const Styledlogo = styled.img`
  height: 30px;
  width: auto;
  padding: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
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
            This app is responsible for taking in information with UI forms. It
            starts with taking the name of the team that is being tested with
            the task, slot, and attempt. The task attempt value is written as
            1-1-1 task-slot-attempt. Then from their one can create a
            configuration ( modal of sensors and layout of quadcopter) by
            clicking the top add-config button. After that, you can create
            evaluations by going back to the home page and clicking on the edit
            button next to the team and task item you made before. There you can
            fill out the form submit and see the results under the Evaluations
            tab at the top of the screen.
          </StyledDescription>
        </StyledCard>
      </StyledView>
    );
  }
}
export default Code;
