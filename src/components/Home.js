import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import Social from "./Social";

const fader = keyframes`${fadeIn}`;

const StyledApp = styled.div`
  animation: 2s ${fader};
`;

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 45%;
  max-width: 500px;
  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
  @media (max-width: 700px) {
    width: 75%;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin-top: 17px;
  color: #555;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 200%;
  @media (max-width: 700px) {
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 130%;
    margin-top: 10px;
    margin-bottom: auto;
  }
`;

const ImportantText = styled.span`
  font-weight: bold;
  font-style: italic;
`;

class Home extends React.Component {
  render() {
    return (
      <StyledApp>
        <StyledView>
          <StyledHeader>
            Southern New Hampshire based <ImportantText>Software</ImportantText>{" "}
            Engineer, <ImportantText>Networking</ImportantText> Professional,
            and <ImportantText>Wellness</ImportantText> Enthusiast with a
            passion for solving problems.
          </StyledHeader>
        </StyledView>
        <Social />
      </StyledApp>
    );
  }
}
export default Home;
