import Ember from 'ember';
import layout from '../../templates/components/stream-banner/station-name';

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['stream-banner__active-stream']
});
