import Component from '@ember/component';
import layout from '../../templates/components/nypr-share-button/button';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['nypr-sharebutton-listitem'],

  closePopup() {}, // passed in from context

  open(href) {
    let { openPopup, closePopup, type } = this;
    if (openPopup) {
      openPopup(type, href);
    }
    if (closePopup) {
      closePopup();
    }
  },

  actions: {
    closePopup() {
      if (this.closePopup)  {
        this.closePopup();
      }
    }
  }
});
