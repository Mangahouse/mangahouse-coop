module.exports = {
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `manga House coop`,
        short_name: `manga House coop`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F24422`,
        display: `minimal-ui`,
        icon: `src/images/MH_icon.png`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'uploads',
      },
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`ja`, `en`],
        defaultLanguage: `en`,
      }
    },
  ]
} 