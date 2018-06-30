import React from 'react';
import styled from "styled-components";

import Navbar from './Navbar';
import Social from './Social';

const StyledApp = styled.div`

padding: 20px;
`;
const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 45%;
  max-width: 500px;
  border-radius: 1%;
  border: none;
  padding: 40px;
  animation: fadein 0.5s forwards;
`;

 const StyledHeader =styled.h1`
 text-align: center;
 margin-top: 17px;
 color: #555;
 font-weight: 500;
 letter-spacing: 2px;
 `;

class Projects extends React.Component {

  render(){
    return(
      <StyledApp>
        <Navbar />
          <StyledView>
          <StyledHeader>
             Southern New Hampshire based Software Engineer, Networking Professional, and Wellness Enthusiast with a passion for solving problems.
          </StyledHeader>
        </StyledView>
        <Social />
      </StyledApp>
    )
  }
}
export default Projects;
