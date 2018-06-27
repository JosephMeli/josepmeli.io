//libraries
import React, { Component } from 'react';
import styled from 'styled-components'

//Components
import Projects from './components/Projects';

const StyledView = styled.div`
  margin:auto;
  background: #36454f ;
  display: grid;
  grid-template-columns:  1r 3r 1r;

`;

class App extends Component {

  render() {
    return (

      <StyledView>
            <Projects />
      </StyledView>



    );
  }
}

export default App;
