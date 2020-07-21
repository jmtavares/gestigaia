import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Gestigaia - Gabinete de Contabilidade | Seguros | Oliveira do Douro"
        keywords={[]}
      />

      <Header />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
