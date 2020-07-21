import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "../../images/logo.webp";
import { H1 } from "../../styles/typography";


const HeaderContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #081824;
  margin: 35px 25px 0 25px;

  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
    margin: 32px 80px;
    border-bottom-width: 1px;
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
`;

const Header = () => (
  <HeaderContainer>
    <StyledLink to="/">
      <LogoImg src={Logo} alt="Logo" />
      <H1>Gestigaia - Gabinete de Contabilidade</H1>
    </StyledLink>
  </HeaderContainer>
);

export default Header;
