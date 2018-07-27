import React from "react";
import styled from "styled-components";

import ProPic from "../assets/Profile_Pic.JPG";
import { resumeData } from "../resume";

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 65%;
  max-width: 500px;
  border: none;
  animation: 0.5s forwards;
  @media (max-width: 700px) {
    width: 75%;
  }
`;
const StyledCard = styled.div`
  display: block;
  margin: 8px;
  font-size: 62.5%;
  font-family: Montserrat;
  color: #333333;
`;
const StyledImage = styled.img`
  height: 150px;
  width: auto;
  border-radius: 10px;

  @media (max-width: 700px) {
    height: 100px;
  }
`;
const StyledDescription = styled.p`
  font-family: "Open Sans";
  font-size: 1.5em;
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
`;

const StyledHeader = styled.div`
  text-align: center;
  font-size: 2em;
  margin-top: 1em;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledTitleHeader = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
`;
const StyledsubHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 1em;
`;
const StyledAreaHeader = styled.div`
  font-weight: bold;
`;
const StyledContactSection = styled.div``;

const StyledContactHeader = styled.div``;

const StyledLink = styled.a`
  padding: 10px;
  text-decoration: none;

  &:active {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`;
class Contact extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledCard>
          <StyledHeader>
            <StyledTitleHeader>{resumeData.basics.name}</StyledTitleHeader>
            <StyledsubHeader>{resumeData.basics.label}</StyledsubHeader>
            <StyledAreaHeader>
              {resumeData.basics.location.city},{
                resumeData.basics.location.region
              },{resumeData.basics.location.countryCode}
            </StyledAreaHeader>
          </StyledHeader>
          <StyledImage src={ProPic} alt="Profile" />
          <StyledDescription>{resumeData.basics.summary}</StyledDescription>

          <StyledHeader> Email Me: </StyledHeader>
          <StyledLink href="joemeli631@gmail.com">
            joemeli631@gmail.com
          </StyledLink>
        </StyledCard>
      </StyledView>
    );
  }
}
export default Contact;
