import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              font-family: "Cormorant Garamond", serif;
              background-color: #ffffff;
              color: #081824;
            }

            li {
              list-style: none;
            }
          `}
        />
        <main>{children}</main>
      </>
    )}
  />
);

export default Layout;
