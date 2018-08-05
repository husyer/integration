import styled from "styled-components";
import React from "react";
import Container from "./cssUtilis/reusableCss";

export default function Content(props) {
  return (
    <Container style={{ marginTop: "20px" }}>
      <ContentLeft>
        Components and Props Components let you split the UI into independent,
        reusable pieces, and think about each piece in isolation. This page
        provides an introduction to the idea of components. You can find a
        detailed component API reference here. Conceptually, components are like
        JavaScript functions. They accept arbitrary inputs (called “props”) and
        return React elements describing what should appear on the screen.
      </ContentLeft>
      <ContentRight>
        <Profile>oo</Profile>
      </ContentRight>
    </Container>
  );
}

const ContentLeft = styled.div`
  flex: 0.7;
  text-align: justify;
`;

const ContentRight = styled.div`
  flex: 0.3;
  opacity: 0.7;
  padding-left: 10px;
  padding-right: 10px;
`;

const Profile = styled.div`
  position: relative;
  color: white;
  background-color: black;
  height: 150px;
  &:after {
    position: absolute;
    content: " ";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid black;
    left: -10px;
    top: 50px;
  }
`;
