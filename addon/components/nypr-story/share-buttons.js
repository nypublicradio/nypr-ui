import Ember from 'ember';
import layout from '../../templates/components/nypr-story/share-buttons';
import { shareUrl } from 'nypr-ui/helpers/share-url';

export default Ember.Component.extend({
  layout,
  actions: {
    popupShareWindow(destination) {
      let href = shareUrl([destination, {
        shareText: this.get('story.title'),
        shareUrl: this.get('story.url'),
        via: this.get('story.twitterHandle'),
        twitterHeadline: this.get('story.twitterHeadline')
        }]);
      const heights = {
        'Twitter': 443,
        'Facebook': 620
      };

      if (href) {
        let features = `titlebar=no,close=no,width=600,height=${heights[destination]}`;
        window.open(href, '_blank', features);
      }
    }
  }
});
