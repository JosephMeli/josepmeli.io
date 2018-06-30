//Dependencies
import React, { Component } from 'react';
import styled from 'styled-components'



const StyledContainer = styled.div`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-around;
`;
const StyledsubContainer = styled.div`
  padding-top: 15px;
  justify-content: flex-start;
`;
const StyledText = styled.h2`
  color: Black;
  &:hover{
  border-bottom: solid 2px blue;
  animation: dropdown 0.2s forwards;
}
`;
const StyledsubText = styled.h5`
  color: Black;
  &:hover{
  border-bottom: solid 2px blue;
  animation: dropdown 0.2s forwards;
}
padding-right: 15px;
display: inline;
`;



class Navbar extends Component {
  render() {
    return (
  <React.Fragment>
    <StyledContainer>
      <StyledText>Joseph Meli</StyledText>
    <StyledsubContainer>
      <StyledsubText>Development</StyledsubText>
      <StyledsubText>Contact</StyledsubText>
    </StyledsubContainer>
  </StyledContainer>
  </React.Fragment>
    );
  }
}

export default Navbar;
