import Ember from 'ember';
import computed from 'ember-computed';
import layout from '../../templates/components/nypr-story/header-content';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Ember.Component.extend(imageLoaderMixin, {
  layout,
  pk: computed('story.id', function() {
    // coerce to string b/c ember-data expects
    // a string for IDs
    return String(this.get('story.id'));
  })
});