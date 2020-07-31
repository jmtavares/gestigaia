import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../sections/header";
import Footer from "../sections/footer";
import { H1 } from "../styles/typography";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #081824;
  min-height: 300px;

  p {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  background-color: #35a1de;
  border-radius: 5px;
  padding: 0 20px;
  text-transform: uppercase;
  transition: background-color 200ms ease 0s;
  :hover {
    background-color: #094d72;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header showMenu={false} />
    <NotFoundContainer>
      <H1>Ups!!</H1>
      <p>Não conseguimos encontrar a página que procura ☹</p>
      <StyledLink to="/">Ir para a Home</StyledLink>
    </NotFoundContainer>
    <Footer />
  </Layout>
);

export default NotFoundPage;
