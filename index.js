/* eslint-env node */
'use strict';

module.exports = {
  name: 'nypr-ui',
  included: function(app) {
    this._super.included(app);
    
    if (app.options.useWaypoints) {
      app.import('node_modules/waypoints/lib/noframework.waypoints.js');
      app.import('vendor/shims/waypoints.js');
    }
  },
  isDevelopingAddon: () => true
};
