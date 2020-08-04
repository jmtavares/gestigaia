import React from "react";
import styled from "@emotion/styled";
import ParallaxImg from "../../images/parallax.webp";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  min-height: 900px;
  background: linear-gradient(#000, transparent, #000),
    url(${ParallaxImg}) 50% / cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
`;

const InnerSection = styled.div`
  max-width: 775px;
  text-align: center;
`;

const StyledTitle = styled("h1")`
  margin: 180px 0 0 0;
  font-size: 40px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 72px;
  }
`;

const StyledSubTitle = styled("h2")`
  margin: 50px 0 0 0;
  font-weight: normal;
  font: normal normal normal 18px/1.67em roboto-thin, roboto, sans-serif;
  @media screen and (min-width: 768px) {
    font: normal normal normal 20px/1.67em roboto-thin, roboto, sans-serif;
  }
`;

const Legend = styled("h3")`
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  margin: 250px 0 50px 0;
`;

const Home = () => (
  <HomeContainer id="home">
    <InnerSection>
      <StyledTitle>Feel the Difference*</StyledTitle>
      <StyledSubTitle>
        A Gestigaia é especializada numa variedade de serviços com excelente
        apoio para o seu negocio. Entendemos o quanto está ocupado e, com a
        nossa experiência, podemos cuidar das suas necessidades tributárias e
        fiscais de maneira rápida e eficaz. Estamos preparados para lidar com os
        documentos, para se preocupar menos e viver mais.
      </StyledSubTitle>
      <Legend>*Sente a diferença</Legend>
    </InnerSection>
  </HomeContainer>
);

export default Home;
