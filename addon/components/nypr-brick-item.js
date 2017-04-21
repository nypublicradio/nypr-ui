import Component from 'ember-component';
import computed, { equal } from 'ember-computed';
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
  pk: computed('item.id', function() {
    // coerce to string b/c ember-data expects
    // a string for IDs
    return String(get(this, 'item.id'));
  }),
  vertical: equal('template', 'vertical'),
  backgroundImage: computed('item.attributes.imageMain.url', function() {
    var imageMain = get(this, 'item.attributes.imageMain');
    var urlString;
    if (imageMain){
      // just in case we don't get a template and crop from the API, fallback to url
      if (imageMain.template && imageMain.crop){
        urlString = imageTemplate([imageMain.template, 800,  0, imageMain.crop]);
      } else {
        urlString = imageMain.url;
      }
      return htmlSafe(`background-image: url(${urlString});`);
    } else {
      return htmlSafe('');
    }
  }),
  analyticsTitle: computed('item.attributes', function() {
    let { headers, title } = this.get('item.attributes');
    if (!headers || !headers.links) {
      return title;
    }
    let shows = headers.links.reverse().map(l => l.title).join(' | ');
    return shows += ` | ${title}`;
  })
});
