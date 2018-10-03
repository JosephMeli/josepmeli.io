import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import Social from "./Social";
import Code from "./Code";
import About from "./About";

const fader = keyframes`${fadeIn}`;

const StyledApp = styled.div`
  animation: 2s ${fader};

  background-position: 100% 0;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: flex;
  justify-content: center;
  
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

const StyledHeader = styled.h4`
  text-align: center;
  margin-top: 17px;
  color: #555;
  font-weight: 300;
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
  padding:4px;

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

const StyledName = styled.div`
  padding-left: 10px;
  color: #555;
  letter-spacing: 3 px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Div = styled.div`
  animation: 2s ${fader};
`;

const Styledhr = styled.hr`
height: 12px;
border: 0;
box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;


class Home extends React.Component {
  render() {
    return (
      <StyledApp>
       
          <StyledContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
                <StyledText>JM</StyledText>
                <StyledMobileText>Joseph Meli</StyledMobileText>
              <Div>
                <StyledName>JOSEPH MELI</StyledName>
              </Div>
            </div>
            <StyledMobileMenu />
          </StyledContainer>
          <Social />
          <StyledView className="raised">
          <StyledHeader>
            Southern New Hampshire based <ImportantText>Software</ImportantText>{" "}
            Engineer, <ImportantText>Networking</ImportantText> Professional,
            and <ImportantText>Wellness</ImportantText> Enthusiast with a
            passion for solving problems.
          </StyledHeader>
     
        </StyledView>
       
        <Styledhr />
        <StyledHeader>Projects</StyledHeader>
        <Code />
        <Styledhr />
        <About />
      </StyledApp>
    );
  }
}
export default Home;
