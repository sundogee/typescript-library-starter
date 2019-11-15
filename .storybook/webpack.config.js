module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: require.resolve('style-loader'),
      },
      {
        loader: require.resolve('css-loader'),
      },
      {
        loader: require.resolve('less-loader'),
        options: { javascriptEnabled : true }
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};