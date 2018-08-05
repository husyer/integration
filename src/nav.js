import styled from "styled-components";
import React from "react";
import Container from "./cssUtilis/reusableCss";
import { Link } from "react-router-dom";

export default function NavHeader(props) {
  return (
    <Container justify="space-between" align="flex-end" style={{ flex: 1 }}>
      <NavTitle>ZZwebSite</NavTitle>
      <div className="nav-menu">
        <NavList>
          <NavLinkStyle>
            <Link to="/Home">Home</Link>
          </NavLinkStyle>
          <NavLinkStyle>
            <Link to="/CssTraining">Css Training</Link>
          </NavLinkStyle>
          <NavLinkStyle>Contact</NavLinkStyle>
        </NavList>
      </div>
    </Container>
  );
}

const NavTitle = styled.div`
  color: red;
  padding-left: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

const NavLinkStyle = styled.li`
  padding-right: 20px;
`;
