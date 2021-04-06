'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'nypr-ui',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    app.import('vendor/shims/waypoints.js');

    if (!app.options.useWaypoints) {
      return;
    }
    var target = parentAddon || app;

    while (target.app && !target.bowerDirectory) {
      target = target.app;
    }

    target.import({
      development: 'vendor/third-party/jquery.waypoints.js',
      production: 'vendor/third-party/jquery.waypoints.min.js',
    });

    target.import({
      development: 'vendor/third-party/sticky.js',
      production: 'vendor/third-party/sticky.min.js'
    });
  },
  treeForVendor(vendorTree) {
    var waypointsTree = new Funnel(path.dirname(require.resolve('waypoints/lib/waypoints.debug.js')), {
      files: [
        'jquery.waypoints.js',
        'jquery.waypoints.min.js',
      ],
      destDir: 'third-party'
    });
    waypointsTree = map(waypointsTree, content => `if (typeof FastBoot === 'undefined') { ${content} }`);

    var stickyTree = new Funnel(path.dirname(require.resolve('waypoints/lib/shortcuts/sticky.js')), {
      files: [
        'sticky.js',
        'sticky.min.js',
      ],
      destDir: 'third-party'
    });
    stickyTree = map(stickyTree, content => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return mergeTrees([vendorTree, waypointsTree, stickyTree]);
  }
};
