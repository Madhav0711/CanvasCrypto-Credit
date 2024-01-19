// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Adds a rule for MP4 files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[ext]',
        },
      },
    });

    // Ignore errors for missing export in the react module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
      };
    }

    return config;
  },
};
