import Ember from 'ember';
import layout from '../templates/components/nypr-multi-card';

export default Ember.Component.extend({
  layout,
  
  children: null,
  lookupKey: 'name',
  
  init() {
    this._super(...arguments);
    this.set('children', Ember.A([]));
  },
  
  activate(to) {
    this.get('children').setEach('active', false);
    if (typeof to === 'number') {
      this.get('children').objectAt(to).set('active', true);
    } else {
      this.get('children').findBy('name', to).set('active', true);
    }
  },
  actions: {
    notify(child) {
      this.get('children').pushObject(child);
      if (this.get('children.length') === 1) {
        this.get('children.firstObject').set('active', true);
      }
    }
  }
});
