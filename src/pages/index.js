import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Hello from "../components/hello/hello";

const IndexContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100vw;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Gestigaia" keywords={[]} />

      <IndexContainer>
        <Hello />
      </IndexContainer>
    </Layout>
  );
};

export default IndexPage;
