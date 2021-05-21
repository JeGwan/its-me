const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  env: require("./.env.js"),
};

module.exports = withBundleAnalyzer(nextConfig);
