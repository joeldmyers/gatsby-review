module.exports = {
  siteMetadata: {
    title: "My Gatsby Blog",
    description: "A demo blog site",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "posts", path: "src/posts" },
    },
  ],
};
