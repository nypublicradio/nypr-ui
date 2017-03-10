import Component from 'ember-component';
import computed from 'ember-computed';

export default Ember.Component.extend({
  tagName: '',
  item: Ember.computed('items', function(){
    return this.get('items');
  }),
});
