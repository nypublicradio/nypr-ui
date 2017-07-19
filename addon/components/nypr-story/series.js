import Ember from 'ember';
import layout from '../../templates/components/nypr-story/series';

export default Ember.Component.extend({
  layout,

  didInsertElement() {
    this.$().imagesLoaded()
      .progress(function(instance, image) {
        Ember.$(image.img).addClass('is-loaded');
      });
  }
});