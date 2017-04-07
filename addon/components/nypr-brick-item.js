import Component from 'ember-component';
import computed, { reads } from 'ember-computed';
import { equal } from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';
import layout from '../templates/components/nypr-brick-item';

export default Component.extend({
  layout,
  tagName: '',
  pk: reads('item.id'),
  vertical: equal('template', 'vertical'),
  backgroundImage: computed(function() {
    var imageUrl = get(this, 'item.attributes.imageMain.url');
    return htmlSafe(`background-image: url(${imageUrl});`);
  })
});
