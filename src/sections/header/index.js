import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "../../images/logo.webp";
import { H1 } from "../../styles/typography";
import FacebookLogo from "../../images/facebook.webp";
import Menu from "./menu";

const HeaderContainer = styled.div`
  margin: 20px 25px;
  @media screen and (min-width: 768px) {
    margin: 32px 80px;
  }
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #081824;
`;

const LogoContainer = styled.div`
  display: flex;
  padding-bottom: 0;
  border-bottom: 2px solid #081824;
  align-items: center;

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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled(H1)`
  font-size: 20px;
`;

const MobileIcon = styled.div`
  display: block;
  z-index: 1;
  margin: 1em;
  width: 40px;
  ::before,
  ::after,
  div {
    background-color: #000;
    border-radius: 3px;
    content: "";
    display: block;
    height: 3px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  ${(props) =>
    props.closed &&
    `
  ::before {
    transform: translateY(10px) rotate(135deg);
  }

  ::after {
    transform: translateY(-10px) rotate(-135deg);
  }

  div {
    transform: scale(0);
  }
  `}

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DesktopMenu = styled(Menu)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  padding: 100px;
`;

const Header = ({ showMenu = true }) => {
  const [visible, setVisible] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer>
        <StyledLink to="/">
          <LogoImg src={Logo} alt="Logo" />
        </StyledLink>
        <TitleContainer>
          <StyledLink to="/">
            <Title>Gestigaia - Gabinete de Contabilidade</Title>
          </StyledLink>
          {showMenu ? (
            <>
              <MobileIcon closed={visible} onClick={() => setVisible(!visible)}>
                <div />
              </MobileIcon>
              {visible && (
                <MobileMenu>
                  <Menu onClick={() => setVisible(false)} />
                </MobileMenu>
              )}
            </>
          ) : null}
        </TitleContainer>
      </LogoContainer>
      {showMenu ? (
        <MenuContainer>
          <DesktopMenu />
          <div>
            <Link
              to="https://www.facebook.com/gestigaia"
              target="_blank"
              rel="noopener"
            >
              <img src={FacebookLogo} alt="Facebook" />
            </Link>
          </div>
        </MenuContainer>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
