import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";
import contactUsImage from "../../images/contactus.webp";

const ContactUsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 80px;
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
  width: 100%;
  position: relative;

  &::after {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${contactUsImage});
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

const ContactUs = () => (
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
        <Link href="mailto:gestigaia@gestigaia.pt">gestigaia@gestigaia.pt</Link>
        <Link href="tel:227877190">227877190</Link>
        <Link href="tel:912536490">912536490</Link>
      </Block>
    </FormContainer>
    <Image />
  </ContactUsContainer>
);

export default ContactUs;
