import Component from 'ember-component';
import computed from 'ember-computed';

export default Ember.Component.extend({
  tagName: '',
  groups: Ember.computed('items', function() {
    let items = this.get('items');
    return [
      items.slice(0, 3),
      items.slice(3, 5),
      items.slice(5)
    ];
  })
});
