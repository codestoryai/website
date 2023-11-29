const withVideos = require('next-videos');

module.exports = withVideos({
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],

  webpack(config, options) {

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "javascript/auto",
      use: [{
        loader: "file-loader",
        options: {
          name: "[hash].[ext]",
          outputPath: "static/fonts/",
          publicPath: "/_next/static/fonts/"
        }
      }]
    });

    return config;
  }
});
