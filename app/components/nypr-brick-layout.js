import Component from 'ember-component';
import computed from 'ember-computed';

export default Ember.Component.extend({
  tagName: '',
  groups: Ember.computed('items', 'chunk', function() {
    let items = this.get('items');
    if (this.get('chunk')){
      return [
        items.slice(0,1),
        items.slice(1,3),
        items.slice(3)
      ];
    } else {
      return [
        items.slice(0, 3),
        items.slice(3, 5),
        items.slice(5)
      ];
    }
    
  })
});
