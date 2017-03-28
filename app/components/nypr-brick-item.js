import Component from 'ember-component';
import computed, { reads } from 'ember-computed';
import { equal } from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';

export default Component.extend({
  tagName: '',
  pk: reads('item.id'),
  vertical: equal('template', 'vertical'),
  backgroundImage: computed(function() {
    var imageUrl = get(this, 'item.attributes.imageMain.url');
    return htmlSafe(`background-image: url(${imageUrl});`);
  })
});
