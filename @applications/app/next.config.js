module.exports = {
  reactStrictMode: true,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [defaultLoaders.babel],
    });

    return config;
  },
};
