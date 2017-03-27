import Component from 'ember-component';
import computed from 'ember-computed';
import { equals } from 'ember-computed';
import htmlSafe from 'ember-string';

export default Component.extend({
  tagName: '',
  pk: computed('item', function() {
    return String(this.get('item.id'));
  }),
  vertical: equals('template', 'vertical'),
  backgroundImage: computed('background-image', function() {
    var imageUrl = this.item.attributes.imageMain.url;
    return htmlSafe('background-image: url('+ imageUrl +')');
  })
});
