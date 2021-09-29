/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const extraNodeModules = {
  "components": path.resolve(__dirname,  "src/components"),
  "config": path.resolve(__dirname,  "src/config"),
  "constants": path.resolve(__dirname,  "src/constants"),
  "env": path.resolve(__dirname,  "src/env"),
  "i18n": path.resolve(__dirname,  "src/i18n"),
  "modules": path.resolve(__dirname,  "src/modules"),
  "navigation": path.resolve(__dirname,  "src/navigation"),
  "screens": path.resolve(__dirname,  "src/screens"),
  "services": path.resolve(__dirname,  "src/services"),
  "utils": path.resolve(__dirname,  "src/utils"),
  "assets": path.resolve(__dirname,  "assets"),
  "icons": path.resolve(__dirname,  "src/components/Icons"),
  "theme": path.resolve(__dirname,  "src/config/theme"),
};

module.exports = {
  resolver: {
    extraNodeModules,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
