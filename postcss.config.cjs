module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: true,
      features: {
        'nesting-rules': true,
      },
    },
  },
};
