import React from "react";
import styled from "styled-components";

import Social from "./Social";
import { resumeData } from "../resume";

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 75%;

  border-radius: 1%;
  border: none;
  background: #f9f9f9;
  font-size: 0.9em;
  font-family: "Lato", sans-serif;
  margin-bottom: 100px;
  animation: 0.5s forwards;
  @media (max-width: 700px) {
    width: 90%;
  }
`;
const StyledCard = styled.div`
  display: block;
  width: auto;
  height: auto;
  background: #ffffff;
  opacity: 1;
  border-radius: 5px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
  }
`;

const StyledDescription = styled.p`
  line-height: 1.4;
  display: block;
  margin: 1em 0;
`;

const StyledH3 = styled.h3`
  margin-top: 1.5em;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 1.17em;
  margin: 1em 0;
`;
const StyledH2 = styled.h2`
  color: #f3f3f3;
  display: block;
  font-size: 1em;
  max-width: 700px;
  margin: 0 auto;
  font-weight: bold;
`;
const StyledH1 = styled.h1`
  color: #ffffff;
  max-width: 700px;
  margin: 0 auto;
  font-size: 2em;
  display: block;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
`;

const Header = styled.div`
  display: block;
  background: #68b6e3;
  padding: 50px;
  margin-bottom: 50px;
`;
const Content = styled.div`
  max-width: 700px;
  padding: 0 50px;
  margin: 0 auto;
`;
const SectionContent = styled.section`
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-top: 1px #e2e2e2 solid;
  @media (max-width: 700px) {
    display: flex !important ;
    align-items: center;
  }
`;
const SubSectionContent = styled.section`
  display: block;
`;

const Item = styled.span`
  margin-bottom: 10px;
  float: center;
  width: 50%;
  display: block;
  @media (max-width: 700px) {
    flex: 1;
    margin-left: 20px;
  }
`;
const Strong = styled.div`
  line-height: 1.3;
  float: center;
  width: 50px;
  font-weight: bold;
`;
const Summary = styled.div`
    clear: both;
    border-top: 1px #e2e2e2 solid;
}
  }
`;

const Work = styled.div`
  clear: both;
  border-top: 1px #e2e2e2 solid;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  &:active {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
  &:hover {
    border-bottom: solid 2px #68b6e3;
    animation: dropdown 0.2s forwards;
  }
`;

class About extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledCard>
          <Header>
            <StyledH1>{resumeData.basics.name}</StyledH1>
            <StyledH2>{resumeData.basics.label}</StyledH2>
          </Header>
          <Content>
            <SectionContent>
              <SubSectionContent>
                <StyledH3>Contact</StyledH3>
                <Item>
                  <Strong>Email</Strong> {resumeData.basics.email}
                </Item>
                <Item>
                  <Strong>Phone</Strong> {resumeData.basics.phone}
                </Item>
                <Item>
                  <Strong>Website</Strong>
                  {resumeData.basics.website}
                </Item>
              </SubSectionContent>
            </SectionContent>
            <SectionContent>
                <StyledH3>Skills</StyledH3> 
                {resumeData.skills.forEach(function(e){
                  <Item>{e}</Item>
                  e.keywords.forEach(function (x){
                   <Item>{x}</Item>
                 })
                })
              } 
            </SectionContent>
            <Summary>
              <StyledH3>About</StyledH3>
              <StyledDescription>{resumeData.basics.summary}</StyledDescription>
            </Summary>
            <Work>
              <StyledH3>Work</StyledH3>

              <Item>
                <Strong>Company</Strong> {resumeData.work.map(a => a.company)}
              </Item>
              <Item>
                <Strong>Postion</Strong> {resumeData.work.map(a => a.position)}
              </Item>
              <Item>
                <Strong>Website</Strong>
                <StyledLink
                  href={resumeData.work.map(a => a.website)}
                  target="_blank"
                >
                  {resumeData.work.map(a => a.website)}
                </StyledLink>
              </Item>
              <Item>
                <Strong>Date of Working</Strong>
                {resumeData.work.map(a => a.startDate)} -{resumeData.work.map(
                  a => a.endDate
                )}
              </Item>
              <br />
              <StyledDescription>
                {resumeData.work.map(a => a.summary)}
              </StyledDescription>
              <h4>Highlights</h4>
              <ul>
                <li>{resumeData.work.map(a => a.highlights[0])}</li>
                <li>{resumeData.work.map(a => a.highlights[1])}</li>
                <li>{resumeData.work.map(a => a.highlights[2])}</li>
              </ul>
            </Work>
          </Content>
          <Social />
        </StyledCard>
      </StyledView>
    );
  }
}
export default About;
