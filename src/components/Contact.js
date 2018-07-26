import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 45%;
  max-width: 500px;
  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
`;

class Contact extends React.Component {
  render() {
    return <StyledView> Test Contact </StyledView>;
  }
}
export default Contact;
