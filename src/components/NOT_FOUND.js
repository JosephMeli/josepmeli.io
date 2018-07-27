import React, { Component } from "react";
import styled from "styled-components";

const StyledView = styled.div`
  display: flex;
  justify-content: center;
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
const StyledText = styled.div`
  color: #68b6e3;
  width: 100%;
  font-weight: bold;
  font-size: 64px;
`;

export default class NOT_FOUND extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>404 NOT FOUND </StyledText>
      </StyledView>
    );
  }
}
