import Ember from 'ember';
import layout from '../../templates/components/nypr-story/main-image';

export default Ember.Component.extend({
  layout,
  captionOpen: false,

  didRender() {
    this.$().imagesLoaded().progress((i, image) => {
      Ember.run(() => {
        image.img.classList.add('is-loaded');
      });
    });
  },

  actions: {
    toggleCaption(){
      if (this.get("captionOpen")){
        this.set("captionOpen", false);
      } else {
        this.set("captionOpen", true);
      }
    }, 
  }

});