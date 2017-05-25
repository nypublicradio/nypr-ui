import Ember from 'ember';
import layout from '../../templates/components/nypr-story/header-content';

export default Ember.Component.extend({
  layout,

  didRender() {
    this.$().imagesLoaded().progress((i, image) => {
      Ember.run(() => {
        image.img.classList.add('is-loaded');
      });
    });
  }

});