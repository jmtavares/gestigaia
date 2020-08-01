import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
`;

const StyledLink = styled(Link)`
  color: #081824;
`;

const Row = styled.div`
  line-height: 25px;
`;

const Footer = () => (
  <FooterContainer>
    <Row>
      <StyledLink
        to="https://www.livroreclamacoes.pt/"
        target="_blank"
        rel="noopener"
      >
        Livro de Reclamações
      </StyledLink>
    </Row>
    <Row>
      <StyledLink to="https://www.cicap.pt/" target="_blank" rel="noopener">
        Resolução de Conflitos
      </StyledLink>
    </Row>
    <Row>©2020 by Gestigaia Lda</Row>
  </FooterContainer>
);

export default Footer;
