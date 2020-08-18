module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/pdf_immediate-demonstrate/" : "/",
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },
};
