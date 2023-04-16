'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const PostcssPlugins = [
  require('tailwindcss')(require('./tailwind.config.js')),
  require('autoprefixer')
];

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: PostcssPlugins,
      },
    },
  });

  return app.toTree();
};
