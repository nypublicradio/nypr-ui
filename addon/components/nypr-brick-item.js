import Component from 'ember-component';
import computed, { reads } from 'ember-computed';
import { equal } from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';
import layout from '../templates/components/nypr-brick-item';

export default Component.extend({
  layout,
  classNames: ['brick__item'],
  classNameBindings: ['item.attributes.template'],
  attributeBindings: ['style'],
  
  style: computed('backgroundImage', function() {
    return htmlSafe(`background-image: ${get(this, 'backgroundImage')}`);
  }),
  pk: reads('item.id'),
  vertical: equal('template', 'vertical'),
  backgroundImage: computed.reads('item.attributes.imageMain.url')
});
