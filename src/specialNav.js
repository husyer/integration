import styled from "styled-components";
import React from "react";
import Container from "./cssUtilis/reusableCss";
import { Link } from "react-router-dom";
import navBannerImage from "./assets/navFont.png";
import logoImage from "./assets/LOGO.png"
import logoRightNav from "./assets/logoRightNav.png"

export default function SpecialNav(props) {
  return (
    <NavContainer class="nav-container">
        <div class="nav-left">
            <NavLogo class="nav-logo">
                <img src={logoImage} alt=""/>
            </NavLogo>
        </div>
        <NavCenter class="nav-center">
            <NavLink href="#" class="nav-link">ACHAT</NavLink>
            <NavLink href="#" class="nav-link">CONSEIL</NavLink>
            <NavLink href="#" class="nav-link">REALITES</NavLink>
        </NavCenter>
        <NavRight class="nav-right">
            <NavLinkRight href="#" class="nav-link-right">01 47 09 38 72</NavLinkRight>
            <NavLinkRight href="#" class="nav-link-right">Contact</NavLinkRight>
            <NavRightLogo src={logoRightNav} alt="" class="nav-right-logo"/>
        </NavRight>

        <NavRightXs class="nav-right-xs">
            Responsive Menu
        </NavRightXs>

    </NavContainer>
  );
}

const NavContainer = styled.div`
  background-image: url(${navBannerImage});
  color: white;
  display: flex;
  height: 70px;
  align-items: center;
`;

const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const NavLinkRight = styled.a`
  padding-right: 37px;
  padding-left: 37px;
  border-right: 1px solid white;
  &:first-child {
    padding-left: 0;
  }
`;

const NavRightLogo = styled.img`
  padding-left: 37px;
  padding-right: 37px;
`;

const NavRightXs = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
  margin-left: auto;
  padding-right: 15px;
`;

const NavLink = styled.a`
  padding-right: 137px;
  &:last-child {
      padding-right: 0;
  }
  @media only screen and (max-width: 1200px) {
      padding-right: 50px;
  }
`

const NavLogo = styled.div`
    width: 149px;
    height: 30px;
    padding-left: 36px;
`
//   .nav-center {
//       flex: 1;
//       display: flex;
//       justify-content: center;
//       @media only screen and (max-width: 900px) {
//           display: none;
//       }
//   }
//   .nav-right {
//       display: flex;
//       align-items: center;
//       font-size: 14px;
//       @media only screen and (max-width: 900px) {
//           display: none;
//       }
//       .nav-link-right {
//           padding-right: 37px;
//           padding-left: 37px;
//           border-right: 1px solid white;
//           &:first-child {
//               padding-left: 0;
//           }
//       }
//       .nav-right-logo {
//           padding-left: 37px;
//           padding-right: 37px;
//       }
//   }
//   .nav-right-xs {
//       @media only screen and (min-width: 900px) {
//           display: none;
//       }
//       margin-left: auto;
//       padding-right: 15px;
//   }
// }

// .nav-logo {
//   width: 149px;
//   height: 30px;
//   padding-left: 36px;
// }

// .nav-link {
//   padding-right: 137px;
//   &:last-child {
//       padding-right: 0;
//   }
//   @media only screen and (max-width: 1200px) {
//       padding-right: 50px;
//   }
// }
