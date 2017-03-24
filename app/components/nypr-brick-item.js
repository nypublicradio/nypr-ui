import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
  tagName: '',
  pk: computed('item', function() {
    return String(this.get('item.id'));
  })
});
