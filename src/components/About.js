import React from "react";
import Typist from "react-typist";
import styled from "styled-components";

import ProPic from "../assets/Profile_Pic.JPG";
import Social from "./Social";

const StyledView = styled.div`
  text-align: center;
  padding-top: 20px;
  hieght: auto;
  width: 250px;
  margin-left: auto;
  border-radius: 4%;
`;

const StyledContainer = styled.div`
  box-shadow: 0 15px 80px rgba(0, 0, 0, 0.14);
`;

const StyledImage = styled.img`
  display: block;
  margin: auto;
  height: 100px;
  width: auto;
`;

const StyledText = styled.div`
  color: #0064ab;
  font-family: Helvectica;
  font-weight: bold;
  font-size: 12px;
  padding: 20px;
`;

const StyledHeader = styled.h2`
  display: block;
  margin: auto;
  font-size: 25px;
  width: auto;
  padding: 5px;

  color: #0064ab;
`;

class About extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledContainer>
          <StyledHeader>About Me</StyledHeader>
          <StyledImage src={ProPic} alt="Profile" />
          <StyledText>
            <Typist>
              Software Engineer, Networking Professional, and Wellness
              Enthusiast
            </Typist>
          </StyledText>
          <Social />
        </StyledContainer>
      </StyledView>
    );
  }
}
export default About;
