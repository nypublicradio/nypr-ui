import Ember from 'ember';
import computed from 'ember-computed';
import layout from '../../templates/components/nypr-story/header-content';

export default Ember.Component.extend({
  layout,
  pk: computed('story.id', function() {
    // coerce to string b/c ember-data expects
    // a string for IDs
    return String(get(this, 'story.id'));
  }),

  didRender() {
    this.$().imagesLoaded().progress((i, image) => {
      Ember.run(() => {
        image.img.classList.add('is-loaded');
      });
    });
  }

});