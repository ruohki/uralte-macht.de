module.exports = {
  siteMetadata: {
    title: 'Uralte-Macht',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'uralte-macht',
        short_name: 'um',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/logo@2x.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
