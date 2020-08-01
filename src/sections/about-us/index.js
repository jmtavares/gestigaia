import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";
import aboutUsImage from "../../images/aboutus.webp";

const AboutUsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 20px;
  margin: 80px;
  min-height: 740px;
`;

const AboutUsText = styled.div`
  background-color: rgba(142, 206, 230, 1);
  text-align: center;
  padding: 30px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 27px 0 0 0;
    line-height: 28px;
  }
`;
const AboutUsImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  object-fit: cover;
`;

const AboutUs = () => (
  <AboutUsContainer id="about-us">
    <AboutUsText>
      <H1>Sobre Nós</H1>
      <p>
        Gestigaia foi criada em Outubro de 1988, tendo vindo a desenvolver-se
        desde então.
      </p>
      <p>
        Inicialmente a Gestigaia era composta apenas por dois funcionários.
        Actualmente conta com uma equipa de diversos colaboradores, abrangendo
        as áreas de contabilidade, fiscalidade, recursos humanos e seguros.
      </p>
      <p>
        A nossa equipa é composta por profissionais qualificados para cada tipo
        de serviço que prestamos. Procuramos dar sempre uma resposta credível e
        atempada às várias solicitações dos nossos clientes, enquadrados nos
        mais variados ramos de actividade económico-empresarial.
      </p>
    </AboutUsText>
    <AboutUsImage src={aboutUsImage} alt="Sobre Nós" loading="lazy" />
  </AboutUsContainer>
);

export default AboutUs;
