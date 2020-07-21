import styled from "@emotion/styled";
import { Link } from "gatsby";

export const H1 = styled.h1`
  font-size: 25px;
  color: #081824;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Anchor = styled(Link)`
  color: #353535;
`;

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Cormorant Garamond", serif;
  background-color: #ffffff;
  overflow: hidden;
`;
