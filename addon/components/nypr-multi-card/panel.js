import Component from '@ember/component';
import layout from '../../templates/components/nypr-multi-card/panel';

export default Component.extend({
  tagName: '',
  layout,
  
  didInsertElement() {
    this._super(...arguments);
    this.sendAction('notify', this);
  },
  
  actions: {
    goTo(to) {
      this.get('setActive')(to);
    }
  }
});
