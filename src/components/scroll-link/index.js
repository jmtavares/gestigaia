import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #081824;
  transition: color 0.4s ease 0s;
  line-height: 40px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #0a4d72;
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    padding-right: 20px;
    font-size: 13px;
    line-height: 30px;
  }
`;

const ScrollLink = ({ children, title, to, onClick }) => {
  const click = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }  
    const element = document.querySelector(to);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MenuLink to={to} title={title} onClick={click}>
      {children}
    </MenuLink>
  );
};

export default ScrollLink;
