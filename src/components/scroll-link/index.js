import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #081824;
  transition: color 0.4s ease 0s;
  padding-right: 10px;
  line-height: 30px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #0a4d72;
  }
`;

const ScrollLink = ({ children, title, to }) => {
  const onClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(to);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MenuLink to={to} title={title} onClick={onClick}>
      {children}
    </MenuLink>
  );
};

export default ScrollLink;
