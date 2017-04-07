import Component from 'ember-component';
import computed, { reads, equal } from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';
import layout from '../templates/components/nypr-brick-item';
import { imageTemplate } from 'nypr-ui/helpers/image-template';

export default Component.extend({
  layout,
  classNames: ['brick__item'],
  classNameBindings: ['item.attributes.template'],
  attributeBindings: ['style'],
  
  style: computed.reads('backgroundImage'),
  pk: reads('item.id'),
  vertical: equal('template', 'vertical'),
  backgroundImage: computed('item.attributes.imageMain.url', function() {
    let imageMain = get(this, 'item.attributes.imageMain');
    let urlString = imageTemplate([imageMain.template, 800,  0, imageMain.crop]);
    if (urlString) {
      return htmlSafe(`background-image: url(${urlString});`);
    }
  })
});
