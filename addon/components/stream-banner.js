import Component from 'ember-component';
import layout from '../templates/components/stream-banner';
import computed from 'ember-computed';

export default Component.extend({
  classNames: ['stream-banner'],
  layout,
  
  activeStream: computed.reads('streams.firstObject')
});
