import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";
import servicesImg1 from "../../images/services1.webp";
import servicesImg2 from "../../images/services2.webp";
import servicesImg3 from "../../images/services3.webp";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px;
`;
const Title = styled(H1)`
  color: #8ecee6;
`;

const SubTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin-top: 27px;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  margin-top: 80px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  object-fit: cover;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 20px;
  box-sizing: border-box;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 22px;
`;

const SectionText = styled.p`
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 28px;
`;

const HalfContainer = styled.div`
  height: 480px;
`;

const Services = () => (
  <ServicesContainer id="services">
    <Title>Serviços</Title>
    <SubTitle>
      Os serviços prestados abrangem áreas desde a contabilidade, fiscalidade,
      recursos humanos e seguros.
    </SubTitle>
    <Table>
      <Item>
        <HalfContainer>
          <Image src={servicesImg1} alt="Contabilidade e fiscalidade" />
        </HalfContainer>
        <HalfContainer>
          <Section color="#fff" backgroundColor="#094d72">
            <SectionTitle>Contabilidade e fiscalidade</SectionTitle>
            <SectionText>
              Elaboramos Contabilidade (Organizada e não organizada), cumprindo
              todas obrigações inerentes, assim como, análises periódicas sobre
              a evolução da sua empresa e simulação de resultados, para que
              antecipe atempadamente o que poderá acontecer no futuro.
            </SectionText>
          </Section>
        </HalfContainer>
      </Item>
      <Item>
        <HalfContainer>
          <Image src={servicesImg2} alt="Recursos humanos" />
        </HalfContainer>
        <HalfContainer>
          <Section color="#081824" backgroundColor="#35a1de">
            <SectionTitle>Recursos humanos</SectionTitle>
            <SectionText>
              Tratamos do seus recursos humanos desde a organização de dossier
              pessoal, elaboração dos processos de inscrição das empresas e dos
              trabalhadores, junto das entidades competentes, processamento de
              salários e respectivos mapas de pagamento, folhas de férias e
              envio das respectivas folhas de remunerações, pagamento das
              contribuições, quer do regime geral, quer dos independentes e
              serviço doméstico, elaboração de mapas de pessoal, e até ao
              tratamento e acompanhamento de todos os assuntos junto da
              segurança social.
            </SectionText>
          </Section>
        </HalfContainer>
      </Item>
      <Item>
        <HalfContainer>
          <Image src={servicesImg3} alt="Seguros" />
        </HalfContainer>
        <HalfContainer>
          <Section color="#081824" backgroundColor="#8dcee6">
            <SectionTitle>Seguros</SectionTitle>
            <SectionText>
              Apresentados a nossa melhor solução para os seus riscos baseados
              nas necessidades actuais tanto das suas empresas como a nível
              pessoal, de diversas Seguradoras. Fazemos ainda o acompanhamento
              dos eventuais processos de sinistro.
            </SectionText>
          </Section>
        </HalfContainer>
      </Item>
    </Table>
  </ServicesContainer>
);

export default Services;
