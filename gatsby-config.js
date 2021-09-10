require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    siteUrl: "https://matscard-art-store.netlify.app/",
    title: "Art Store",
    author: `@matscard`,
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-stripe`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: process.env.STRIPE_SK,
      }
    }
  ],
};
