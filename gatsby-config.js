/* require("dotenv").config({
  path: `.env`,
 })
 */
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  siteMetadata: {
    siteUrl: "https://matscard-art-store.netlify.app/",
    title: "Art Store",
    author: `@matscard`,
  },
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: "./.env", // load this now instead of the ones in '.env'
        systemvars: true
      })
    ]
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
