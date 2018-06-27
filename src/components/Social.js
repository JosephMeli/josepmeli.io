//Dependencies
import React, { Component } from 'react';
import styled from 'styled-components'
//Assests
import Github_logo from '../assets/GitHub.png';
import linkedin_logo from '../assets/linkedIn.png';


const StyledContainer = styled.div`
  padding-top: 15px;
  flex: auto;
`;

const Styledlogo = styled.img`
  height: 60px;
  width: auto;
  padding-right: 10px;
  padding-left: 10px;
`;

class Social extends Component {
  render() {
    return (
  <StyledContainer className="social-container">
    <a href="https://github.com/JosephMeli">
      <Styledlogo src={Github_logo} className='logoStyle' alt="Github_logo"></Styledlogo>
    </a>
    <a href="https://www.linkedin.com/in/josephmeli/">
      <Styledlogo src={linkedin_logo} className='logoStyle' alt="linkedin_logo"></Styledlogo>
    </a>
  </StyledContainer>
    );
  }
}

export default Social;
