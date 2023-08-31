import React from "react";
import styled from "styled-components";
import NavButton, { NavButtonType } from "./NavBarButton";
import NavLink from "./NavBarkLink";
import Logo from "../assets/Logo.svg";

const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  height: 85px;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 248px;
  /* background-color: #e622cb; */
  margin-right: 200px;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 238px;
  /* background-color: #e622cb; */
  margin-right: 50px;
`;
const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100px;
  margin-left: 50px;
  margin-right: auto;
`;
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" width="100px" />
      </LogoContainer>
      <LinksContainer>
        <NavLink text="Download" href="#" />
        <NavLink text="Help" href="#" />
      </LinksContainer>
      <ButtonsContainer>
        <NavButton text="Log in" type={NavButtonType.Secondary} />
        <NavButton text="Sign Up" type={NavButtonType.Primary} />
      </ButtonsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
