import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "../../images/logo.webp";
import { H1 } from "../../styles/typography";
import FacebookLogo from "../../images/facebook.webp";
import ScrollLink from "../scroll-link";

const HeaderContainer = styled.div`
  margin: 35px 25px 0 25px;
  @media screen and (min-width: 768px) {
    margin: 32px 80px;
  }
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #081824;
`;

const LogoContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #081824;

  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
    border-bottom-width: 1px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const Menus = styled.div``;
const SocialLinks = styled.div``;

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <StyledLink to="/">
        <LogoImg src={Logo} alt="Logo" />
        <H1>Gestigaia - Gabinete de Contabilidade</H1>
      </StyledLink>
    </LogoContainer>
    <MenuContainer>
      <Menus>
        <ScrollLink to="#home" title="Home">
          Home
        </ScrollLink>
        <ScrollLink to="#about-us" title="Sobre Nós">
          Sobre Nós
        </ScrollLink>
        <ScrollLink to="#services" title="Serviços">
          Serviços
        </ScrollLink>
        <ScrollLink to="#contact-us" title="Contacte-nos">
          Contacte-nos
        </ScrollLink>
      </Menus>
      <SocialLinks>
        <Link to="https://www.facebook.com/gestigaia" target="_blank">
          <img src={FacebookLogo} alt="Facebook" />
        </Link>
      </SocialLinks>
    </MenuContainer>
  </HeaderContainer>
);

export default Header;
