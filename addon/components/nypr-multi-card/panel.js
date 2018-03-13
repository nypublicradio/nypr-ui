import Component from '@ember/component';
import layout from '../../templates/components/nypr-multi-card/panel';

export default Component.extend({
  tagName: '',
  layout,

  didInsertElement() {
    this._super(...arguments);
    let notify = this.get('notify');
    if (notify) {
      this.get('notify')(this);
    }
  },

  actions: {
    goTo(to) {
      this.get('setActive')(to);
    }
  }
});
