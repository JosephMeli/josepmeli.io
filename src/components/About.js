import React from "react";
import styled from "styled-components";

import ProPic from "../assets/Profile_Pic.JPG";

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 65%;
  max-width: 500px;
  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
  @media (max-width: 700px) {
    width: 75%;
  }
`;
const StyledCard = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
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
`;
const StyledText = styled.div`
  padding: 30px;
  color: #2061c9;
  width: 100%;
  font-weight: bold;
  font-size: 64px;
  @media (max-width: 700px) {
    font-size: 32px;
  }
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
  color: #555;
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
          <StyledText>Who am I?</StyledText>

          <StyledImage src={ProPic} alt="Profile" />
          <StyledDescription>
            Passionate Software Engineer professional with a track record of
            leveraging technology to increase bottom line organizational
            performance. Comprehensive understanding of C and Python programming
            languages along with experience building websites. Currently
            completing a Bachelor of Science (B.S.) in Computer Science.
            Exceptional learner with outstanding team leadership, presentation,
            and communication skills.
          </StyledDescription>

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
