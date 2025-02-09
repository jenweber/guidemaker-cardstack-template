'use strict';

var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  },

  config(env, config) {
    let existingFonts = config.googleFonts || [];

    return {
      googleFonts: [
        ...existingFonts,
        'Fredericka+the+Great',
        'Roboto:300'
      ]
    }
  },
};
