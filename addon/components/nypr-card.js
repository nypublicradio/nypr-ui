import Ember from 'ember';
import layout from '../templates/components/nypr-card';

export default Ember.Component.extend({
  toggled: false,

  classNames: ['nypr-card'],

  layout,
  
  actions: {
    toggle() {
      let toggled = this.toggleProperty('toggled');
      if (this.attrs.toggle) {
        this.attrs.toggle(toggled);
      }
    }
  }
});
