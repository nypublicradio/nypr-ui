import Component from '@ember/component';
import layout from '../../templates/components/nypr-story/share-buttons';
import { shareUrl } from 'nypr-ui/helpers/share-url';

export default Component.extend({
  layout,
  classNames: ['btn-group'],
  actions: {
    popupShareWindow(destination) {
      let shareText = this.get('story.title');
      let url = this.get('story.url');
      let via = this.get('story.twitterHandle') || this.via;
      let twitterHeadline = this.get('story.twitterHeadline') || shareText;

      let href = shareUrl([destination, url, shareText, via, twitterHeadline]);
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
