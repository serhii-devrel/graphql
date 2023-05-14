module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("grpahql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};
