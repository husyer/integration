import styled from "styled-components";
import React, { Component } from "react";
import Container from "../cssUtilis/reusableCss";
import Lunarimage from "../assets/lunarEclipse.jpg";

class GroingDiv extends Component {
  render() {
    return (
      <Container justify="center" style={{ flex: 1 }}>
        <GrowingDiv>
          <ContentDiv>
            <p>CouCou les zouzous</p>
            <p>3 heures</p>
            <p>C'est lhistoire des zouzous qui vont a la plage</p>
          </ContentDiv>
        </GrowingDiv>
      </Container>
    );
  }
}

export default GroingDiv;

const GrowingDiv = styled.div`
  display:flex;
  flex-direction:column-reverse;
  background-image: url(${Lunarimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 250px;
  height: 150px;
  transition: all 0.3s ease;
  padding: 5px;
  > div {
    /* descendant-selectors work as well, but are more of an escape hatch */
    display: none;
  }

  &:hover {
    transform: scale(2);

    > div {
      /* descendant-selectors work as well, but are more of an escape hatch */
      display: block;
      color:white;
    }
  }
`;

const ContentDiv = styled.div`
  flex:0.5;
  > p {
    /* descendant-selectors work as well, but are more of an escape hatch */
    margin:0
  }
`;
