(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Waypoint'],
      __esModule: true,
    };
  }

  define('waypoints', [], vendorModule);
})();
