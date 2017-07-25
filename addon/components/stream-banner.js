import Component from 'ember-component';
import layout from '../templates/components/stream-banner';
import computed from 'ember-computed';
import { htmlSafe } from 'ember-string';

export default Component.extend({
  classNames: ['stream-banner'],
  layout,
  
  activeStream: computed.reads('streams.firstObject'),
  style: computed('background', function() {
    return htmlSafe(`background-image: url(${this.get('background')});`);
  })
});
