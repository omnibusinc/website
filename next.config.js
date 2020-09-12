const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
  webpack(config, options) {
    return config;
  }
};

const plugins = [[withImages], [withFonts]];

module.exports = withPlugins(plugins, nextConfiguration);

// module.exports = withImages({
//   webpack(config, options) {
//     return config;
//   },
// });
