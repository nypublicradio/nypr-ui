import layout from '../templates/components/nypr-share-button';
import Component from '@ember/component';

export default Component.extend({
  layout,
  text: null,
  region: null,
  type: null,

  classNames: ['nypr-sharebutton'],

  shareText: null,
  shareUrl: null,
  analyticsCode: null,

  actions: {
    popupShareWindow(destination, href) {
      const heights = {
        'Twitter': 433,
        'Facebook': 620
      };
      if (href) {
        let features = `titlebar=no,close=no,width=600,height=${heights[destination]}`;
        window.open(href, '_blank', features);
      }
    }
  }
});
