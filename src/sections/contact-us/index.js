import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { H1 } from "../../styles/typography";
import contactUsImage from "../../images/contactus.webp";

const ContactUsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin: 40px 0 0 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
    margin: 80px 80px 0 80px;
  }
`;

const FormContainer = styled.div`
  background-color: #094d72;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  color: #fff;
  @media screen and (min-width: 768px) {
    padding: 60px;
  }
`;

const Image = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background: url(${contactUsImage}) 85%;
  background-attachment: fixed;
  background-blend-mode: multiply;
  background-size: 75%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Block = styled.div`
  text-align: center;
  margin-top: 25px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  p {
    margin: 0 0 15px 0;
  }
`;

const Link = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin: 0 0 15px 0;
`;

const MapContainer = styled.div`
  height: 400px;
  margin: 0;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    margin: 0 80px;
  }
`;

const IframeMap = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const SharedInputStyled = css`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  background-color: transparent;
  border: 1px solid #fff;
  height: 50px;
  padding: 10px;
  width: 100%;
  color: #fff;
  box-sizing: border-box;
  ::placeholder {
    color: #fff;
  }
`;

const StyledInput = styled.input`
  ${SharedInputStyled}
  height: 50px;
`;

const StyledTextarea = styled.textarea`
  ${SharedInputStyled}
  height: 125px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 460px;
`;

const StyledButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 0;
  padding: 15px 40px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.5);
  }
`;

const ButtonContainer = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const ContactUs = () => (
  <>
    <ContactUsContainer id="contact-us">
      <FormContainer>
        <H1>Contacte-nos</H1>
        <Block>
          <p>Horário</p>
          <p>Segunda a Sexta</p>
          <p>09:00 - 13:00</p>
          <p>14:00 - 18:00</p>
        </Block>

        <Block>
          <p>Rua Manuel Braga 15</p>
          <p>4430-455 Oliveira do Douro</p>
          <Link href="mailto:gestigaia@gestigaia.pt">
            gestigaia@gestigaia.pt
          </Link>
          <Link href="tel:227877190">227877190</Link>
          <Link href="tel:912536490">912536490</Link>
        </Block>

        <Form
          name="contact"
          action="/thank-you"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <StyledInput type="text" name="nome" placeholder="Nome" required />
          </p>
          <p>
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </p>
          <p>
            <StyledInput
              type="text"
              name="assunto"
              placeholder="Assunto"
              required
            />
          </p>
          <p>
            <StyledTextarea
              name="mensagem"
              placeholder="A sua mensagem aqui..."
              required
            />
          </p>
          <ButtonContainer>
            <StyledButton type="submit">Enviar</StyledButton>
          </ButtonContainer>
        </Form>
      </FormContainer>
      <Image />
    </ContactUsContainer>
    <MapContainer>
      <IframeMap
        id="gmap_canvas"
        title="Mapa"
        src="https://maps.google.com/maps?q=Gestigaia-Gabinete+Contabilidade+E+Estudos+Economicos&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
      />
    </MapContainer>
  </>
);

export default ContactUs;
