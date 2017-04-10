/* jshint node: true */
'use strict';

module.exports = {
  name: 'nypr-ui',
  included: function() {
    this._super.included.apply(this, arguments);
  },
  isDevelopingAddon: () => true
};
