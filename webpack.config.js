const path = require('path');

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const aliases = {
  'module-of-interest': path.resolve('../packages/module-of-interess'),
};

const babelLoaderRules = {
  test: /\.tsx?$/,
  loader: 'babel-loader',
  options: {
    presets: ['babel-preset-expo'],
    ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
  },
};

const htmlLoaderRules = {
  test: /\.(gif|png|avif|jpe?g)$/,
  type: 'asset/resource',
  generator: {
    filename: '[name][ext]',
    publicPath: 'assets/',
    outputPath: 'assets',
  },
};

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases,
  };

  config.module.rules = [
    ...config.module.rules,
    babelLoaderRules,
    htmlLoaderRules,
  ];

  // Other configuration options

  return config;
};
