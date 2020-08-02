import React from "react";
import styled from "@emotion/styled";
import ScrollLink from "../../../components/scroll-link";

const MenuContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;  
  }
`;

const Menu = ({ className, onClick }) => (
  <MenuContainer className={className}>
    <ScrollLink to="#home" title="Home" onClick={onClick}>
      Home
    </ScrollLink>
    <ScrollLink to="#about-us" title="Sobre Nós" onClick={onClick}>
      Sobre Nós
    </ScrollLink>
    <ScrollLink to="#services" title="Serviços" onClick={onClick}>
      Serviços
    </ScrollLink>
    <ScrollLink to="#contact-us" title="Contacte-nos" onClick={onClick}>
      Contacte-nos
    </ScrollLink>
  </MenuContainer>
);

export default Menu;
