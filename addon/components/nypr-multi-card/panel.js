import Component from '@ember/component';
import layout from '../../templates/components/nypr-multi-card/panel';

export default Component.extend({
  tagName: '',
  layout,

  didInsertElement() {
    this._super(...arguments);
    let notify = this.notify;
    if (notify) {
      this.notify(this);
    }
  },

  actions: {
    goTo(to) {
      this.setActive(to);
    }
  }
});
