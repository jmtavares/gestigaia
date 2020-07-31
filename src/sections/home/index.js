import React from "react";
import styled from "@emotion/styled";
import ParallaxImg from "../../images/parallax1.webp";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  height: 700px;
  width: 100%;
  position: relative;

  &::after {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${ParallaxImg});
    background-position: center top;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const InnerSection = styled.div`
  max-width: 775px;
  text-align: center;
`;

const StyledTitle = styled("h1")`
  margin: 150px 0 0 0;
  font-size: 72px;
  font-weight: bold;
`;

const StyledSubTitle = styled("h2")`
  margin: 50px 0 0 0;
  font-weight: normal;
  font: normal normal normal 20px/1.67em roboto-thin, roboto, sans-serif;
`;

const Legend = styled("h3")`
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  margin: 200px 0 0 0;
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
