module.exports = {
  siteMetadata: {
    title: `Gestigaia - Gabinete de Contabilidade | Seguros | Oliveira do Douro`,
    description: `Na Gestigaia prestamos serviços de contabilidade, fiscalidade, recursos humanos e seguros no grande porto, Vila nova de Gaia, Oliveira do Douro`,
    author: `Gestigaia`,
    siteUrl: `https://www.gestigaia.pt/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gestigaia`,
        short_name: `Gestigaia`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `fullscreen`,
        icon: 'src/images/logo.webp'
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cormorant+Garamond`,
            variants: [`400`, `600`],
          },
          {
            family: `Roboto`,
            variants: [`100`],
          },
          {
            family: `Montserrat`,
            variants: [`400`],
          },
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //`gatsby-plugin-offline`    
  ],
};
