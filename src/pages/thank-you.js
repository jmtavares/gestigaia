import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { H1 } from "../styles/typography";

const ThankYouContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(14, 30, 37);
`;

const ThankYouCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 364px;
  padding: 24px;
  background: white;
  color: rgb(14, 30, 37);
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.16);
`;

const StyledLink = styled(Link)`
  height: 40px;
  line-height: 40px;
  color: #094d72;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`;

const Title = styled(H1)`
  font-size: 30px;
`;
const Subtitle = styled("h2")`
  font-size: 20px;
`;

const ThankYouPage = () => (
  <Layout>
    <SEO title="Gestigaia - Formulário recebido" />
    <ThankYouContainer>
      <ThankYouCard>
        <Title>Obrigado</Title>
        <Subtitle>O formulário foi recebido.</Subtitle>
        <StyledLink to="/">← Voltar</StyledLink>
      </ThankYouCard>
    </ThankYouContainer>
  </Layout>
);

export default ThankYouPage;
