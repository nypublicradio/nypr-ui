import Component from 'ember-component';
import computed from 'ember-computed';
import { equals } from 'ember-computed';

export default Component.extend({
  tagName: '',
  pk: computed('item', function() {
    return String(this.get('item.id'));
  }),
  vertical: Ember.computed.equal('template', 'vertical')
});
