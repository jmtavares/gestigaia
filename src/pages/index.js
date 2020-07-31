import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../sections/header";
import Footer from "../sections/footer";
import Home from "../sections/home";
import AboutUs from "../sections/about-us";
import Services from "../sections/services";
import ContactUs from "../sections/contact-us";

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
