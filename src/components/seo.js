/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import seoImage from "../images/logo.png";

function SEO({ description, lang, meta, keywords, title }) {
  const defaultKeywords = ["Contabilidade", "Recursos Humanos", "Seguros"];
  const groupedKeywords = defaultKeywords.concat(keywords);
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const fullImageUrl = `${site.siteMetadata.url}${seoImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: fullImageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: fullImageUrl,
        },
        {
          name: "google-site-verification",
          content: "632PfAw4Mso5zn1b8kMjmgU6TMhmOqkRa2VrLyc3t6A",
        },
      ]
        .concat(
          groupedKeywords.length > 0
            ? {
                name: `keywords`,
                content: groupedKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

export default SEO;
