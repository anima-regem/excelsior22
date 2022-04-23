module.exports = {
  siteMetadata: {
    title: `Excelsior'22`,
    description: `Exclesior 2022 is the third emphasis of the flagship event of IEEE SB GEC PALAKKAD. It is usually conducted at Government Engineering College, Sreekrishnapuram, Palakkad every year, lasts for a period of nearly 4 days. Participation of about 200 vibrant technophiles,the event marks a techno enthusiasts fortune moment to get involved in culmination of information, inspiration and association.`,
    author: `Aravind k Subash`,
  },
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
        name: `Excelsior 2022 | IEEE SB GEC Palakkad`,
        short_name: `Excelsior'22`,
        start_url: `/`,
        background_color: `#292929`,
        theme_color: `#292929`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
