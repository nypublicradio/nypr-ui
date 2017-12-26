/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'nypr-ui',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
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
    
    app.import('vendor/shims/waypoints.js');
  },
  treeForVendor(vendorTree) {
    var waypointsTree = new Funnel(path.dirname(require.resolve('waypoints/lib/waypoints.debug.js')), {
      files: [
        'jquery.waypoints.js',
        'jquery.waypoints.min.js',
      ],
      destDir: 'third-party'
    });
    
    var stickyTree = new Funnel(path.dirname(require.resolve('waypoints/lib/shortcuts/sticky.js')), {
      files: [
        'sticky.js',
        'sticky.min.js',
      ],
      destDir: 'third-party'
    });
    
    return mergeTrees([vendorTree, waypointsTree, stickyTree]);

  },
  isDevelopingAddon: () => true
};
