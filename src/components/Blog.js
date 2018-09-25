import React from "react";
import styled from "styled-components";


const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 65%;
  max-width: 600px;
  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
  @media (max-width: 700px) {
    width: 75%;
  }
`;


class Code extends React.Component {
  render() {
    return (
      <StyledView>
        <h1> Blog</h1>
      </StyledView>
    );
  }
}
export default Code;
