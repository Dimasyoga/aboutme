module.exports = {
  pathPrefix: "/aboutme",
  siteMetadata: {
    title: `Online Portfolio - Moh Dimas Yoga Pratama`,
    description: `Dimas Yoga - Electrical Engineering Graduate, Robotic, Internet of Thing, and Machine Learning Enthusiast`,
    author: `Dimas Yoga`,
    siteUrl: 'https://dimasyoga.github.io/aboutme/',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `online-portfolio`,
        short_name: `portfolio`,
        start_url: `/aboutme`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
