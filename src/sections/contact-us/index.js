import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";
import contactUsImage from "../../images/contactus.webp";

const ContactUsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 80px 80px 0 80px;
`;

const FormContainer = styled.div`
  background-color: #35a1de;
  display: flex;
  flex-direction: column;
  padding: 60px;
  box-sizing: border-box;
  align-items: center;
  color: #fff;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background: linear-gradient(#000, transparent, #000),
    url(${contactUsImage}) 85%;
  background-attachment: fixed;
  background-blend-mode: multiply;
  background-size: 75%;
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
  margin: 0 80px;
  box-sizing: border-box;
`;

const IframeMap = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const StyledInput = styled.input`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  background-color: transparent;
  border: 1px solid #fff;
  height: 50px;
  padding: 10px;
  width: 100%;
  color: #fff;
  box-sizing: border-box;
  outline: none;
  ::placeholder {
    color: #fff;
  }
`;

const StyledTextarea = styled.textarea`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid #fff;
  height: 125px;
  padding: 10px;
  width: 100%;
  color: #fff;
  box-sizing: border-box;
  outline: none;
  ::placeholder {
    color: #fff;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 0;
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
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

        <Form name="contact" method="POST" data-netlify="true">
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
