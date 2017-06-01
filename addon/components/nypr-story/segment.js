import Ember from 'ember';
import computed from 'ember-computed';
import layout from '../../templates/components/nypr-story/segment';

export default Ember.Component.extend({
  layout,
  pk: computed('segment.id', function() {
    // coerce to string b/c ember-data expects
    // a string for IDs
    return String(get(this, 'segment.id'));
  }),
});