import React from 'react';

import Typist from 'react-typist'
import styled from "styled-components";

import ProPic from '../assets/Profile_Pic.JPG';

import Social from './Social'

const StyledView = styled.div`
  text-align: center;
padding-top: 20px;
 padding-bottom: 20px;
 margin: auto;
 margin-bottom: 20px;
 width: 500px;
 border-radius: 4%;
 margin-top: 50px;
 box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
 -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
 -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
 background-color: #aabaff;
`;

const StyledImage = styled.img`
  display: block;
  margin: auto;
  margin-top: 2vh;
  height: 250px;
  width:auto;
  border-radius: 2%;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
`;

const StyledText = styled.div `
  color: DarkBlue;
  font-weight: bold;
  font-family: Helvectica;
 font-weight: bold;
 font-size: 120%;
 padding: 20px;

`;

const StyledHeader = styled.h2 `
    display: block;
    margin: auto;
    font-size: 35px;
    text-emphasis: 20px;
`;

class Projects extends React.Component {

  render(){
    return(
      <React.Fragment>
        <StyledView>
            <StyledHeader>About Me</StyledHeader>
             <StyledImage src={ProPic} alt="Profile">
           </StyledImage>
           <StyledText>
             <Typist>
               Software Engineer, Networking Professional, and Wellness Enthusiast
             </Typist>
                </StyledText>
             <Social />

         </StyledView>
    </React.Fragment>
    )
  }
}
export default Projects;
