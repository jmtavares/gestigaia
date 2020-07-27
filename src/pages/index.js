import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import AboutUs from "../components/about-us";
import Services from "../components/services";
import ContactUs from "../components/contact-us";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Gestigaia - Gabinete de Contabilidade | Seguros | Oliveira do Douro"
        keywords={[]}
      />

      <Header />
      <Home />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
