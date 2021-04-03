import { A } from '@ember/array';
import Component from '@ember/component';
import layout from '../templates/components/nypr-multi-card';

export default Component.extend({
  layout,
  
  children: null,
  lookupKey: 'name',
  
  init() {
    this._super(...arguments);
    this.set('children', A([]));
  },
  
  activate(to) {
    this.children.setEach('active', false);
    if (typeof to === 'number') {
      this.children.objectAt(to).set('active', true);
    } else {
      this.children.findBy('name', to).set('active', true);
    }
  },
  actions: {
    notify(child) {
      this.children.pushObject(child);
      if (this.get('children.length') === 1) {
        this.get('children.firstObject').set('active', true);
      }
    }
  }
});
